import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor('Sun City Mesquite Amenities | 55+ Community Features | Dr. Jan Duffy', 'Sun City Mesquite amenities include 30,000 sq ft Pioneer Center, pickleball courts, pools, fitness center, and 100+ clubs. Call 702-718-2228.', "/Sun_City_Mesquite_Amenities", IMAGES.clubhouse),
  title: 'Sun City Mesquite Amenities | 55+ Community Features | Dr. Jan Duffy',
  description: 'Sun City Mesquite amenities include 30,000 sq ft Pioneer Center, pickleball courts, pools, fitness center, and 100+ clubs. Call 702-718-2228.',
};

export default function AmenitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

