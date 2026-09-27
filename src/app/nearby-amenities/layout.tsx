import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { amenitiesPageProductionUrl, communityMapConfig } from '@/config/amenityMapConfig';

const title = `Nearby Amenities in ${communityMapConfig.communityName}, Nevada | Dr. Jan Duffy`;
const description = `Interactive map of golf, healthcare, groceries, parks, and shopping near Mesquite Estates in Mesquite, NV. Hyperlocal guide by Dr. Jan Duffy — call 702-718-2228.`;

const canonicalUrl = `${amenitiesPageProductionUrl}/nearby-amenities`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: '/Image/hero_bg_1.jpg',
        width: 1200,
        height: 630,
        alt: `Nearby amenities near ${communityMapConfig.communityName}, Nevada`,
      },
    ],
  },
};

export default function NearbyAmenitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
