import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor("About Mesquite, NV | Virgin River Valley Living", "Mesquite, Nevada at a glance: Virgin River Valley location, red mesa views, championship golf courses, and recreation an hour from Las Vegas.", "/About_Mesquite", IMAGES.river),
  title: { absolute: "About Mesquite, NV | Virgin River Valley Living" },
  description: "Mesquite, Nevada at a glance: Virgin River Valley location, red mesa views, championship golf courses, and recreation an hour from Las Vegas.",
};

export default function AboutMesquiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
