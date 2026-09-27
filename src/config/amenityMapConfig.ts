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
  /** Places API (New) primary types */
  includedPrimaryTypes: string[];
  /** Legacy PlacesService type (fallback) */
  legacyType?: string;
};

/** Golf-forward order for Mesquite's resort & family market (not high-rise / not schools-omitted 55+ only). */
export const amenityCategories: AmenityCategory[] = [
  {
    id: 'golf',
    label: 'Golf',
    includedPrimaryTypes: ['golf_course'],
    legacyType: 'golf_course',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    includedPrimaryTypes: ['hospital', 'doctor'],
    legacyType: 'hospital',
  },
  {
    id: 'parks',
    label: 'Parks',
    includedPrimaryTypes: ['park'],
    legacyType: 'park',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    includedPrimaryTypes: ['grocery_store', 'supermarket'],
    legacyType: 'grocery_or_supermarket',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    includedPrimaryTypes: ['restaurant'],
    legacyType: 'restaurant',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    includedPrimaryTypes: ['cafe', 'coffee_shop'],
    legacyType: 'cafe',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    includedPrimaryTypes: ['gym', 'fitness_center'],
    legacyType: 'gym',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    includedPrimaryTypes: ['shopping_mall', 'department_store', 'store'],
    legacyType: 'shopping_mall',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    includedPrimaryTypes: ['pharmacy', 'drugstore'],
    legacyType: 'pharmacy',
  },
  {
    id: 'parking',
    label: 'Parking',
    includedPrimaryTypes: ['parking'],
    legacyType: 'parking',
  },
  {
    id: 'schools',
    label: 'Schools',
    includedPrimaryTypes: ['school', 'primary_school', 'secondary_school'],
    legacyType: 'school',
  },
];

export type CuratedPlace = {
  name: string;
  address: string;
  category: AmenityCategoryId;
  schemaType: string;
  note?: string;
};

/** Verified businesses and public places in Mesquite, NV (names + street addresses only). */
export const curatedPlaces: CuratedPlace[] = [
  {
    name: 'Conestoga Golf Club',
    address: '1025 Omaha Dr, Mesquite, NV 89027',
    category: 'golf',
    schemaType: 'GolfCourse',
  },
  {
    name: 'Wolf Creek Golf Club',
    address: '4031 Wolf Creek Dr, Mesquite, NV 89034',
    category: 'golf',
    schemaType: 'GolfCourse',
  },
  {
    name: 'CasaBlanca Golf Club',
    address: '511 W Mesquite Blvd, Mesquite, NV 89027',
    category: 'golf',
    schemaType: 'GolfCourse',
  },
  {
    name: 'Mesa View Regional Medical Center',
    address: '1299 Bertha Howe Ave, Mesquite, NV 89027',
    category: 'healthcare',
    schemaType: 'Hospital',
  },
  {
    name: "Smith's Food and Drug",
    address: '1127 W Pioneer Blvd, Mesquite, NV 89027',
    category: 'grocery',
    schemaType: 'GroceryStore',
  },
  {
    name: 'Albertsons',
    address: '475 W Mesquite Blvd, Mesquite, NV 89027',
    category: 'grocery',
    schemaType: 'GroceryStore',
  },
  {
    name: 'Mesquite Veterans Memorial Park',
    address: '836 E Pioneer Blvd, Mesquite, NV 89027',
    category: 'parks',
    schemaType: 'Park',
  },
  {
    name: 'Virgin Valley High School',
    address: '820 Valley View Dr, Mesquite, NV 89027',
    category: 'schools',
    schemaType: 'School',
  },
  {
    name: 'Walmart Supercenter',
    address: '1120 W Pioneer Blvd, Mesquite, NV 89027',
    category: 'shopping',
    schemaType: 'Store',
  },
  {
    name: 'CVS Pharmacy',
    address: '611 W Mesquite Blvd, Mesquite, NV 89027',
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
