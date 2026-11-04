import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor('Sun City Mesquite Floor Plans | Del Webb Home Designs | Dr. Jan Duffy', 'Explore 21 single-family floor plans at Sun City Mesquite. Cottage, Retreat, and Encore series from $327,990. Call 702-718-2228.', "/Sun_City_Mesquite_Floor_Plans", IMAGES.greatRoom),
  title: 'Sun City Mesquite Floor Plans | Del Webb Home Designs | Dr. Jan Duffy',
  description: 'Explore 21 single-family floor plans at Sun City Mesquite. Cottage, Retreat, and Encore series from $327,990. Call 702-718-2228.',
};

export default function FloorPlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

