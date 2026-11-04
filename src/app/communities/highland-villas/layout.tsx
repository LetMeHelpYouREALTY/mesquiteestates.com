import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...ogFor('Highland Villas Homes for Sale | Mesquite Nevada', 'Highland Villas homes for sale in Mesquite, Nevada. Peaceful neighborhood with easy access to amenities. Call Dr. Jan Duffy 702-718-2228.', "/communities/highland-villas", IMAGES.cambria),
  title: 'Highland Villas Homes for Sale | Mesquite Nevada',
  description: 'Highland Villas homes for sale in Mesquite, Nevada. Peaceful neighborhood with easy access to amenities. Call Dr. Jan Duffy 702-718-2228.',
};

export default function HighlandVillasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

