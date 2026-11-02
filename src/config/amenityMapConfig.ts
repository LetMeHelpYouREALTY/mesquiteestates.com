/**
 * Hyperlocal map center for Mesquite Estates (mesquiteestates.com).
 * Coordinates from OpenStreetMap Nominatim for Dr. Jan Duffy's GBP-matching office:
 * 1155 W Pioneer Blvd, Mesquite, NV 89027 — lat 36.8069018, lng -114.1098077
 */
export const communityMapConfig = {
  communityName: 'Mesquite',
  brandName: 'Mesquite Estates',
  city: 'Mesquite',
  state: 'Nevada',
  stateCode: 'NV',
  center: {
    lat: 36.8069018,
    lng: -114.1098077,
  },
  defaultZoom: 13,
  searchRadiusMeters: 8000,
  communityMarkerTitle: 'Mesquite Estates',
  communityMarkerAddress: '1155 W Pioneer Blvd, Mesquite, NV 89027',
};

/** www host for the nearby-amenities page canonical + page-level JSON-LD (apex redirects to www). */
export const amenitiesPageProductionUrl = 'https://www.mesquiteestates.com';

export type AmenityCategoryId =
  | 'golf'
  | 'healthcare'
  | 'parks'
  | 'grocery'
  | 'restaurants'
  | 'cafes'
  | 'fitness'
  | 'shopping'
  | 'pharmacies'
  | 'parking'
  | 'schools';

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Places API (New) primary types — one searchNearby per category */
  includedPrimaryTypes: string[];
};

/** Golf-forward order for Mesquite's resort market. */
export const amenityCategories: AmenityCategory[] = [
  {
    id: 'golf',
    label: 'Golf',
    includedPrimaryTypes: ['golf_course'],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    includedPrimaryTypes: ['hospital', 'doctor'],
  },
  {
    id: 'parks',
    label: 'Parks',
    includedPrimaryTypes: ['park'],
  },
  {
    id: 'grocery',
    label: 'Grocery',
    includedPrimaryTypes: ['grocery_store', 'supermarket'],
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    includedPrimaryTypes: ['restaurant'],
  },
  {
    id: 'cafes',
    label: 'Cafes',
    includedPrimaryTypes: ['cafe', 'coffee_shop'],
  },
  {
    id: 'fitness',
    label: 'Fitness',
    includedPrimaryTypes: ['gym', 'fitness_center'],
  },
  {
    id: 'shopping',
    label: 'Shopping',
    includedPrimaryTypes: ['shopping_mall', 'department_store', 'store'],
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    includedPrimaryTypes: ['pharmacy', 'drugstore'],
  },
  {
    id: 'parking',
    label: 'Parking',
    includedPrimaryTypes: ['parking'],
  },
  {
    id: 'schools',
    label: 'Schools',
    includedPrimaryTypes: ['school', 'primary_school', 'secondary_school'],
  },
];

export type CuratedPlace = {
  name: string;
  /** Verified street address; omit from JSON-LD when undefined */
  address?: string;
  sourceUrl: string;
  category: AmenityCategoryId;
  schemaType: string;
  note?: string;
};

/** Verified hyperlocal places in Mesquite, NV (primary-source URLs on file). */
export const curatedPlaces: CuratedPlace[] = [
  {
    name: 'Conestoga Golf Club',
    address: '1499 Falcon Ridge Pkwy, Mesquite, NV 89034',
    sourceUrl: 'https://conestogagolf.com/contact/',
    category: 'golf',
    schemaType: 'GolfCourse',
    note: 'Sun City Mesquite resident course',
  },
  {
    name: 'Wolf Creek Golf Club',
    address: '403 Paradise Pkwy, Mesquite, NV 89027',
    sourceUrl: 'https://golfwolfcreek.com/contact-us/',
    category: 'golf',
    schemaType: 'GolfCourse',
  },
  {
    name: 'CasaBlanca Golf Club',
    address: '1100 W Hafen Ln, Mesquite, NV 89027',
    sourceUrl: 'https://www.visitmesquite.com/listing/casablanca-golf-club/36799/',
    category: 'golf',
    schemaType: 'GolfCourse',
  },
  {
    name: 'Mesa View Regional Hospital',
    address: '1299 Bertha Howe Ave, Mesquite, NV 89027',
    sourceUrl: 'https://mesaviewhospital.com/contact-us/',
    category: 'healthcare',
    schemaType: 'Hospital',
  },
  {
    name: "Smith's Food and Drug",
    address: '350 N Sandhill Blvd, Mesquite, NV 89027',
    sourceUrl: 'https://www.smithsfoodanddrug.com/stores/grocery/nv/mesquite',
    category: 'grocery',
    schemaType: 'GroceryStore',
  },
  {
    name: 'Walmart Supercenter',
    address: '1120 W Pioneer Blvd, Mesquite, NV 89027',
    sourceUrl: 'https://www.walmart.com/store/3847-mesquite-nv',
    category: 'shopping',
    schemaType: 'Store',
  },
  {
    name: "Veteran's Memorial Park",
    address: '501 Hillside Dr, Mesquite, NV 89027',
    sourceUrl: 'https://www.mesquitenv.gov/locations/veterans-memorial-park',
    category: 'parks',
    schemaType: 'Park',
  },
  {
    name: 'Virgin Valley High School',
    address: '820 Valley View Dr, Mesquite, NV 89027',
    sourceUrl: 'https://www.vvhsdawgs.org/about-vvhs/contact',
    category: 'schools',
    schemaType: 'School',
    note: 'Verify attendance zones with CCSD Zoning Search.',
  },
  {
    name: 'Walgreens Pharmacy',
    address: '329 N Sandhill Blvd, Mesquite, NV 89027',
    sourceUrl: 'https://www.walgreens.com/storelocator/pharmacy/mesquite-nv-329-n-sandhill-blvd-12646',
    category: 'pharmacies',
    schemaType: 'Pharmacy',
  },
];

export function getGoogleMapsEmbedUrl(lat: number, lng: number, zoom = 14): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}

export function getDirectionsUrl(lat: number, lng: number, placeName?: string): string {
  const query = placeName
    ? encodeURIComponent(`${placeName} @ ${lat},${lng}`)
    : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}
