import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor('Conestoga Golf Club | Sun City Mesquite, NV', 'Conestoga Golf Club - 18-hole championship course at Sun City Mesquite. Gary Panks design, 1880 Grille restaurant. Call 702-718-2228.', "/Conestoga_Golf_Mesquite", IMAGES.golf),
  title: { absolute: 'Conestoga Golf Club | Sun City Mesquite, NV' },
  description: 'Conestoga Golf Club - 18-hole championship course at Sun City Mesquite. Gary Panks design, 1880 Grille restaurant. Call 702-718-2228.',
};

export default function ConestogaGolfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

