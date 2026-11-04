import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...ogFor('Mesquite Vistas Homes for Sale | Community', 'Mesquite Vistas homes for sale in Mesquite, Nevada. Community with scenic desert vistas. Call Dr. Jan Duffy 702-718-2228.', "/communities/mesquite-vistas", IMAGES.golf),
  title: 'Mesquite Vistas Homes for Sale | Community',
  description: 'Mesquite Vistas homes for sale in Mesquite, Nevada. Community with scenic desert vistas. Call Dr. Jan Duffy 702-718-2228.',
};

export default function MesquiteVistasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

