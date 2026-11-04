import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor("About Mesquite Estates | Dr. Jan Duffy, REALTOR\u00ae", "Meet Dr. Jan Duffy and Mesquite Estates: homes and custom lots in Mesquite, Nevada's Virgin River Valley, about an hour north of Las Vegas.", "/About", IMAGES.entry),
  title: { absolute: "About Mesquite Estates | Dr. Jan Duffy, REALTOR\u00ae" },
  description: "Meet Dr. Jan Duffy and Mesquite Estates: homes and custom lots in Mesquite, Nevada's Virgin River Valley, about an hour north of Las Vegas.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
