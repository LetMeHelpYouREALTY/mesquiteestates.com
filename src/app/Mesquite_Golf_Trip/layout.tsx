import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Mesquite, NV Golf Trip Guide | Courses & Resorts" },
  description: "Plan a Mesquite, Nevada golf trip: seven championship courses, 300+ days of sun, resorts, and the drive 80 miles north of Las Vegas.",
};

export default function MesquiteGolfTripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
