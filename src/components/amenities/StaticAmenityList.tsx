import {
  amenityCategories,
  curatedPlaces,
  type AmenityCategoryId,
} from '@/config/amenityMapConfig';

type StaticAmenityListProps = {
  activeCategory?: AmenityCategoryId;
  showAllCategories?: boolean;
  className?: string;
};

export default function StaticAmenityList({
  activeCategory,
  showAllCategories = true,
  className = '',
}: StaticAmenityListProps) {
  const categoriesToShow = showAllCategories
    ? amenityCategories
    : amenityCategories.filter((c) => c.id === activeCategory);

  return (
    <div className={className} aria-label="Nearby places list">
      {categoriesToShow.map((category) => {
        const places = curatedPlaces.filter((p) => p.category === category.id);
        if (places.length === 0) return null;

        return (
          <div key={category.id} className="mb-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">{category.label}</h3>
            <ul className="space-y-2">
              {places.map((place) => (
                <li
                  key={`${place.name}-${place.address}`}
                  className="rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-700 shadow-sm"
                >
                  <p className="font-medium text-gray-900">{place.name}</p>
                  <p className="text-gray-600">{place.address}</p>
                  {place.note && <p className="mt-1 text-gray-500">{place.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
