import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...ogFor('Sun City Mesquite Neighborhood Guide | Mesquite, NV', 'Sun City Mesquite homes for sale in Nevada\'s premier 55+ active adult community by Del Webb. Golf, fitness, clubs. Call Dr. Jan 702-718-2228.', "/communities/sun-city-mesquite", IMAGES.clubhouse),
  title: { absolute: 'Sun City Mesquite Neighborhood Guide | Mesquite, NV' },
  description: 'Sun City Mesquite homes for sale in Nevada\'s premier 55+ active adult community by Del Webb. Golf, fitness, clubs. Call Dr. Jan 702-718-2228.',
  keywords: [
    'Sun City Mesquite homes for sale',
    'Del Webb Mesquite',
    '55+ communities Mesquite NV',
    'Sun City Mesquite Nevada',
    'active adult community Mesquite',
  ],
};

export default function SunCityMesquiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

