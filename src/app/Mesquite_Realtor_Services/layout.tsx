import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor("Mesquite Realtor Services | Buy & Sell With Dr. Duffy", "Buyer and seller services in Mesquite, Nevada: pricing, marketing, negotiation, golf course homes, and custom lots with Dr. Jan Duffy.", "/Mesquite_Realtor_Services", IMAGES.keys),
  title: { absolute: "Mesquite Realtor Services | Buy & Sell With Dr. Duffy" },
  description: "Buyer and seller services in Mesquite, Nevada: pricing, marketing, negotiation, golf course homes, and custom lots with Dr. Jan Duffy.",
};

export default function MesquiteRealtorServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
