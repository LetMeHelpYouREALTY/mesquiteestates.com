'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  amenityCategories,
  communityMapConfig,
  getGoogleMapsEmbedUrl,
  getDirectionsUrl,
  type AmenityCategoryId,
} from '@/config/amenityMapConfig';
import { searchCategory } from '@/lib/amenityPlacesSearch';
import {
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  loadGoogleMapsFromEnv,
  mapsAuthFailed,
} from '@/lib/loadGoogleMaps';
import StaticAmenityList from '@/components/amenities/StaticAmenityList';

const MAP_MIN_HEIGHT = 420;

type MapPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  mapsUri?: string;
};

function buildPlaceInfoContent(place: MapPlaceResult): HTMLElement {
  const wrap = document.createElement('div');
  wrap.style.maxWidth = '240px';
  wrap.style.fontFamily = 'system-ui, sans-serif';

  const title = document.createElement('strong');
  title.textContent = place.name;
  wrap.appendChild(title);

  if (place.address) {
    wrap.appendChild(document.createElement('br'));
    const addr = document.createElement('span');
    addr.style.fontSize = '13px';
    addr.style.color = '#444';
    addr.textContent = place.address;
    wrap.appendChild(addr);
  }

  wrap.appendChild(document.createElement('br'));
  const link = document.createElement('a');
  link.href = place.mapsUri ?? getDirectionsUrl(place.lat, place.lng, place.name);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.style.fontSize = '13px';
  link.style.color = '#2563eb';
  link.textContent = 'Directions';
  wrap.appendChild(link);

  return wrap;
}

function buildCommunityInfoContent(): HTMLElement {
  const wrap = document.createElement('div');
  wrap.style.maxWidth = '220px';
  wrap.style.fontFamily = 'system-ui, sans-serif';

  const title = document.createElement('strong');
  title.textContent = communityMapConfig.communityMarkerTitle;
  wrap.appendChild(title);

  wrap.appendChild(document.createElement('br'));
  const addr = document.createElement('span');
  addr.style.fontSize = '13px';
  addr.style.color = '#444';
  addr.textContent = communityMapConfig.communityMarkerAddress;
  wrap.appendChild(addr);

  return wrap;
}

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
  const [useFallback, setUseFallback] = useState(
    () => !getGoogleMapsApiKey() || mapsAuthFailed,
  );
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [placeResults, setPlaceResults] = useState<MapPlaceResult[]>([]);
  const [showCuratedForCategory, setShowCuratedForCategory] = useState(false);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const enterFallback = useCallback(() => {
    clearMarkers();
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
    mapRef.current = null;
    setMapReady(false);
    setPlaceResults([]);
    setUseFallback(true);
    setShowCuratedForCategory(true);
  }, [clearMarkers]);

  const showInfo = useCallback((content: HTMLElement, anchor: google.maps.MVCObject) => {
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
    communityMarkerRef.current.addListener('click', () => {
      if (communityMarkerRef.current) {
        showInfo(buildCommunityInfoContent(), communityMarkerRef.current);
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
        marker.addListener('click', () => showInfo(buildPlaceInfoContent(place), marker));
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
      setShowCuratedForCategory(false);
      try {
        const { lat, lng } = communityMapConfig.center;
        const places = await searchCategory(
          { lat, lng },
          categoryId,
          category.includedPrimaryTypes,
          communityMapConfig.searchRadiusMeters,
        );

        const results: MapPlaceResult[] = places.flatMap((place, index) => {
          const location = place.location;
          if (!location) return [];
          const json = location.toJSON?.() ?? {
            lat: typeof location.lat === 'function' ? location.lat() : location.lat,
            lng: typeof location.lng === 'function' ? location.lng() : location.lng,
          };
          return [
            {
              id: place.id ?? `place-${index}`,
              name: place.displayName ?? 'Place',
              address: place.formattedAddress ?? '',
              lat: json.lat as number,
              lng: json.lng as number,
              mapsUri: place.googleMapsURI ?? undefined,
            },
          ];
        });

        setPlaceResults(results);
        renderPlaceMarkers(results);
      } catch {
        setPlaceResults([]);
        clearMarkers();
        setShowCuratedForCategory(true);
      } finally {
        setLoadingPlaces(false);
      }
    },
    [clearMarkers, renderPlaceMarkers, useFallback],
  );

  const initMap = useCallback(async () => {
    if (!mapDivRef.current || mapRef.current || useFallback) return;
    if (mapsAuthFailed) {
      enterFallback();
      return;
    }

    try {
      await loadGoogleMapsFromEnv();
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
      enterFallback();
    }
  }, [activeCategory, addCommunityMarker, enterFallback, searchNearbyPlaces, useFallback]);

  useEffect(() => {
    const onAuthFailure = () => enterFallback();
    window.addEventListener('gmaps:auth-failure', onAuthFailure);
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
  }, [enterFallback]);

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
          {(useFallback || showCuratedForCategory) && (
            <p className="mt-2 text-xs text-gray-500">
              Showing verified local places for this category. Live map data is unavailable.
            </p>
          )}
          {placeResults.length > 0 && !useFallback && !showCuratedForCategory && (
            <p className="mt-2 text-xs text-gray-500">
              Map markers reflect live Google Places results for the selected category when available.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
