import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor("Mesquite, NV Weather | 300+ Days of Sunshine", "Mesquite, Nevada weather by season: a warm desert climate with 300+ sunny days a year for golf and outdoor living.", "/Mesquite_Weather", IMAGES.poolTerrace),
  title: { absolute: "Mesquite, NV Weather | 300+ Days of Sunshine" },
  description: "Mesquite, Nevada weather by season: a warm desert climate with 300+ sunny days a year for golf and outdoor living.",
};

export default function MesquiteWeatherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
