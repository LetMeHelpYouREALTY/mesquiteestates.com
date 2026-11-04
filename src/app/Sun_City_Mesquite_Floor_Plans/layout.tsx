import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor('Sun City Mesquite Floor Plans | Del Webb Models', 'Sun City Mesquite floor plans: Cottage from $349,990, Retreat from $429,990, Encore from $491,990 (Del Webb, Oct 12, 2026). 1,285 to 2,731 sq ft.', "/Sun_City_Mesquite_Floor_Plans", IMAGES.greatRoom),
  title: { absolute: 'Sun City Mesquite Floor Plans | Del Webb Models' },
  description: 'Sun City Mesquite floor plans: Cottage from $349,990, Retreat from $429,990, Encore from $491,990 (Del Webb, Oct 12, 2026). 1,285 to 2,731 sq ft.',
};

export default function FloorPlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

