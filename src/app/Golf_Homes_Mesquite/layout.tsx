import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor("Golf Homes in Mesquite, NV | Homes on the Course", "Golf course homes and custom lots in Mesquite, Nevada, from about $70K to $700K, on or near the area's championship courses.", "/Golf_Homes_Mesquite", IMAGES.golfBackyard),
  title: { absolute: "Golf Homes in Mesquite, NV | Homes on the Course" },
  description: "Golf course homes and custom lots in Mesquite, Nevada, from about $70K to $700K, on or near the area's championship courses.",
};

export default function GolfHomesMesquiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
