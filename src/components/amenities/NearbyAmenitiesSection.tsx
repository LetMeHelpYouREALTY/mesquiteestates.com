import Link from 'next/link';
import AmenityMap from '@/components/amenities/AmenityMap';
import { communityMapConfig, type AmenityCategoryId } from '@/config/amenityMapConfig';

type NearbyAmenitiesSectionProps = {
  title?: string;
  subtitle?: string;
  defaultCategory?: AmenityCategoryId;
  showStaticList?: boolean;
  className?: string;
};

export default function NearbyAmenitiesSection({
  title = `Life Near ${communityMapConfig.communityName}`,
  subtitle = `Explore golf, healthcare, groceries, parks, and everyday essentials around ${communityMapConfig.brandName} in the Virgin River Valley.`,
  defaultCategory = 'golf',
  showStaticList = false,
  className = '',
}: NearbyAmenitiesSectionProps) {
  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}
      aria-labelledby="nearby-amenities-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2
            id="nearby-amenities-heading"
            className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-3"
          >
            {title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">{subtitle}</p>
          <Link
            href="/nearby-amenities"
            className="mt-4 inline-block text-indigo-700 font-semibold hover:text-indigo-900 underline"
          >
            View full nearby amenities guide →
          </Link>
        </div>
        <AmenityMap defaultCategory={defaultCategory} showStaticList={showStaticList} />
      </div>
    </section>
  );
}
