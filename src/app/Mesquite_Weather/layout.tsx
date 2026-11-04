import type { Metadata } from "next";

export const metadata: Metadata = {
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
