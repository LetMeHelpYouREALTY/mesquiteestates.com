import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...ogFor('Mesquite, NV Communities | Neighborhood Guide', 'Explore Mesquite, Nevada communities including Sun City Mesquite 55+, Falcon Ridge, Mesquite Vistas, and more. Find your perfect neighborhood with Dr. Jan Duffy.', "/communities", IMAGES.townAerial),
  title: { absolute: 'Mesquite, NV Communities | Neighborhood Guide' },
  description: 'Explore Mesquite, Nevada communities including Sun City Mesquite 55+, Falcon Ridge, Mesquite Vistas, and more. Find your perfect neighborhood with Dr. Jan Duffy.',
  keywords: [
    'Mesquite communities',
    'Sun City Mesquite',
    'Falcon Ridge Mesquite',
    'Mesquite neighborhoods',
    '55+ communities Mesquite',
    'golf communities Mesquite',
  ],
};

export default function CommunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

