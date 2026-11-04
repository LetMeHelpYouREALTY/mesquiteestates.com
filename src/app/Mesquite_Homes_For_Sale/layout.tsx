import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor("Mesquite, NV Homes for Sale | $440K Median Sale", "Browse Mesquite, Nevada homes and lots for sale. Homes sold for a $440K median over the past year (MLS, Nov 2026). Search with Dr. Jan Duffy.", "/Mesquite_Homes_For_Sale", IMAGES.hero),
  title: { absolute: "Mesquite, NV Homes for Sale | $440K Median Sale" },
  description: "Browse Mesquite, Nevada homes and lots for sale. Homes sold for a $440K median over the past year (MLS, Nov 2026). Search with Dr. Jan Duffy.",
};

export default function MesquiteHomesForSaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
