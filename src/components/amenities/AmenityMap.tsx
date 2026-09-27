'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  amenityCategories,
  communityMapConfig,
  curatedPlaces,
  getGoogleMapsEmbedUrl,
  getDirectionsUrl,
  type AmenityCategoryId,
} from '@/config/amenityMapConfig';
import {
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  loadGoogleMapsScript,
} from '@/lib/loadGoogleMaps';
import StaticAmenityList from '@/components/amenities/StaticAmenityList';

const MAP_MIN_HEIGHT = 420;

type MapPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating?: number;
};

type AmenityMapProps = {
  defaultCategory?: AmenityCategoryId;
  showStaticList?: boolean;
  className?: string;
};

export default function AmenityMap({
  defaultCategory = 'golf',
  showStaticList = true,
  className = '',
}: AmenityMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [isVisible, setIsVisible] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [useFallback, setUseFallback] = useState(!getGoogleMapsApiKey());
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [placeResults, setPlaceResults] = useState<MapPlaceResult[]>([]);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showInfo = useCallback((content: string, anchor: google.maps.MVCObject) => {
    if (!mapRef.current) return;
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow();
    }
    infoWindowRef.current.setContent(content);
    infoWindowRef.current.open(mapRef.current, anchor as google.maps.MVCObject);
  }, []);

  const addCommunityMarker = useCallback((map: google.maps.Map) => {
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
    }
    const { lat, lng } = communityMapConfig.center;
    communityMarkerRef.current = new google.maps.Marker({
      map,
      position: { lat, lng },
      title: communityMapConfig.communityMarkerTitle,
      zIndex: 1000,
    });
    const communityContent = `
      <div style="max-width:220px;font-family:system-ui,sans-serif">
        <strong>${communityMapConfig.communityMarkerTitle}</strong><br/>
        <span style="font-size:13px;color:#444">${communityMapConfig.communityMarkerAddress}</span>
      </div>`;
    communityMarkerRef.current.addListener('click', () => {
      if (communityMarkerRef.current) {
        showInfo(communityContent, communityMarkerRef.current);
      }
    });
  }, [showInfo]);

  const renderPlaceMarkers = useCallback(
    (places: MapPlaceResult[]) => {
      if (!mapRef.current) return;
      clearMarkers();
      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map: mapRef.current!,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        const ratingLine =
          place.rating !== undefined
            ? `<br/><span style="font-size:13px">Rating: ${place.rating.toFixed(1)}</span>`
            : '';
        const directionsUrl = getDirectionsUrl(place.lat, place.lng, place.name);
        const html = `
          <div style="max-width:240px;font-family:system-ui,sans-serif">
            <strong>${place.name}</strong>${ratingLine}<br/>
            <span style="font-size:13px;color:#444">${place.address}</span><br/>
            <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" style="font-size:13px;color:#2563eb">Directions</a>
          </div>`;
        marker.addListener('click', () => showInfo(html, marker));
        markersRef.current.push(marker);
      });
    },
    [clearMarkers, showInfo],
  );

  const searchNearbyPlaces = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current || useFallback) return;
      const category = amenityCategories.find((c) => c.id === categoryId);
      if (!category) return;

      setLoadingPlaces(true);
      try {
        const googleMaps = await loadGoogleMapsScript();
        const { lat, lng } = communityMapConfig.center;
        const center = new google.maps.LatLng(lat, lng);
        let results: MapPlaceResult[] = [];

        const placesLibrary = await google.maps.importLibrary('places');
        const PlaceCtor = (placesLibrary as google.maps.PlacesLibrary).Place;

        if (PlaceCtor?.searchNearby) {
          const { places } = await PlaceCtor.searchNearby({
            fields: ['displayName', 'formattedAddress', 'location', 'rating', 'id'],
            locationRestriction: {
              center: { lat, lng },
              radius: communityMapConfig.searchRadiusMeters,
            },
            includedPrimaryTypes: category.includedPrimaryTypes,
            maxResultCount: 15,
          });

          const mapped = (places ?? []).flatMap((place, index) => {
            const location = place.location;
            if (!location) return [];
            const item: MapPlaceResult = {
              id: place.id ?? `place-${index}`,
              name: place.displayName ?? 'Place',
              address: place.formattedAddress ?? '',
              lat: location.lat(),
              lng: location.lng(),
              rating: place.rating ?? undefined,
            };
            return [item];
          });
          results = mapped;
        } else {
          await new Promise<void>((resolve) => {
            const service = new google.maps.places.PlacesService(mapRef.current!);
            service.nearbySearch(
              {
                location: center,
                radius: communityMapConfig.searchRadiusMeters,
                type: category.legacyType,
              },
              (searchResults, status) => {
                if (
                  status === google.maps.places.PlacesServiceStatus.OK &&
                  searchResults
                ) {
                  results = searchResults
                    .filter((r) => r.geometry?.location)
                    .map((r, index) => ({
                      id: r.place_id ?? `legacy-${index}`,
                      name: r.name ?? 'Place',
                      address: r.vicinity ?? '',
                      lat: r.geometry!.location!.lat(),
                      lng: r.geometry!.location!.lng(),
                      rating: r.rating,
                    }));
                }
                resolve();
              },
            );
          });
        }

        setPlaceResults(results);
        renderPlaceMarkers(results);
      } catch {
        setUseFallback(true);
      } finally {
        setLoadingPlaces(false);
      }
    },
    [renderPlaceMarkers, useFallback],
  );

  const initMap = useCallback(async () => {
    if (!mapDivRef.current || mapRef.current || useFallback) return;

    try {
      await loadGoogleMapsScript();
      const mapId = getGoogleMapsMapId();
      const { lat, lng } = communityMapConfig.center;

      mapRef.current = new google.maps.Map(mapDivRef.current, {
        center: { lat, lng },
        zoom: communityMapConfig.defaultZoom,
        mapId: mapId || undefined,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      addCommunityMarker(mapRef.current);
      setMapReady(true);
      await searchNearbyPlaces(activeCategory);
    } catch {
      setUseFallback(true);
    }
  }, [activeCategory, addCommunityMarker, searchNearbyPlaces, useFallback]);

  useEffect(() => {
    if (!containerRef.current || isVisible) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observerRef.current?.disconnect();
        }
      },
      { rootMargin: '120px' },
    );
    observerRef.current.observe(containerRef.current);

    return () => observerRef.current?.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || useFallback) return;
    initMap();
  }, [isVisible, initMap, useFallback]);

  useEffect(() => {
    if (!mapReady || useFallback) return;
    searchNearbyPlaces(activeCategory);
  }, [activeCategory, mapReady, searchNearbyPlaces, useFallback]);

  const embedUrl = getGoogleMapsEmbedUrl(
    communityMapConfig.center.lat,
    communityMapConfig.center.lng,
  );

  return (
    <div ref={containerRef} className={className}>
      <div
        className="mb-4 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter nearby amenities by category"
      >
        {amenityCategories.map((category) => {
          const selected = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={`Show ${category.label} near ${communityMapConfig.communityName}`}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                selected
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        className="relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm"
        style={{ minHeight: MAP_MIN_HEIGHT }}
        aria-busy={loadingPlaces}
      >
        {useFallback ? (
          <iframe
            title={`Map of ${communityMapConfig.communityName}, Nevada`}
            src={embedUrl}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div
            ref={mapDivRef}
            className="h-[420px] w-full"
            role="application"
            aria-label={`Interactive map of amenities near ${communityMapConfig.communityName}`}
          />
        )}
        {loadingPlaces && !useFallback && (
          <p className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-1 text-xs text-gray-600 shadow">
            Loading places…
          </p>
        )}
      </div>

      {showStaticList && (
        <div className="mt-6">
          <h3 className="mb-3 text-lg font-semibold text-indigo-900">
            Featured places in {communityMapConfig.communityName}
          </h3>
          <StaticAmenityList activeCategory={activeCategory} showAllCategories={false} />
          {placeResults.length > 0 && !useFallback && (
            <p className="mt-2 text-xs text-gray-500">
              Map markers reflect live Google Places results for the selected category when available.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
