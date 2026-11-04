import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor("Golf Homes in Mesquite, NV | Homes on the Course", "Golf course homes and building lots in Mesquite, Nevada, near the area's championship courses. Recent prices, golf access and HOA facts.", "/Golf_Homes_Mesquite", IMAGES.golfBackyard),
  title: { absolute: "Golf Homes in Mesquite, NV | Homes on the Course" },
  description: "Golf course homes and building lots in Mesquite, Nevada, near the area's championship courses. Recent prices, golf access and HOA facts.",
};

export default function GolfHomesMesquiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
