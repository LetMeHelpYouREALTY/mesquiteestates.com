import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Real Estate Services in Mesquite, NV | 55+ & Lots" },
  description: "Real estate services in Mesquite, Nevada: custom lots, move-in-ready homes, and 55+ active adult communities with Dr. Jan Duffy.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
