import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor('Sun City Mesquite Homes for Sale | Del Webb 55+', 'Sun City Mesquite homes for sale - Nevada\'s premier Del Webb 55+ active adult community. Golf, pools, fitness, 300 days of sunshine. Call Dr. Jan 702-718-2228.', "/Sun_City_Mesquite", IMAGES.clubhouse),
  title: { absolute: 'Sun City Mesquite Homes for Sale | Del Webb 55+' },
  description: 'Sun City Mesquite homes for sale - Nevada\'s premier Del Webb 55+ active adult community. Golf, pools, fitness, 300 days of sunshine. Call Dr. Jan 702-718-2228.',
  keywords: 'Sun City Mesquite, Del Webb Mesquite, 55+ community Mesquite NV, active adult Mesquite, Conestoga Golf',
};

export default function SunCityMesquiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

