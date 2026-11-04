import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Mesquite, NV Homes for Sale | $70K Lots to $700K" },
  description: "Browse Mesquite, Nevada homes for sale and custom lots from about $70K to $700K in the Virgin River Valley, with Dr. Jan Duffy.",
};

export default function MesquiteHomesForSaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
