import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor("Mesquite, NV Homes for Sale | $70K Lots to $700K", "Browse Mesquite, Nevada homes for sale and custom lots from about $70K to $700K in the Virgin River Valley, with Dr. Jan Duffy.", "/Mesquite_Homes_For_Sale", IMAGES.hero),
  title: { absolute: "Mesquite, NV Homes for Sale | $70K Lots to $700K" },
  description: "Browse Mesquite, Nevada homes for sale and custom lots from about $70K to $700K in the Virgin River Valley, with Dr. Jan Duffy.",
};

export default function MesquiteHomesForSaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
