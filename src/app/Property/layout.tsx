import type { Metadata } from "next";

// Template/demo content (not real Mesquite listings or market data) — keep out of Google's index.
export const metadata: Metadata = {
  title: { absolute: "Property Search | Mesquite Estates" },
  robots: { index: false, follow: true },
};

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
