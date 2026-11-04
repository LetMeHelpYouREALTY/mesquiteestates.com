import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Getting to Mesquite, NV | Drive, Fly & Shuttle" },
  description: "How to reach Mesquite, Nevada: 80 miles north of Las Vegas on I-15, flights into Las Vegas, shuttle options, and area directions.",
};

export default function MesquiteTransportationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
