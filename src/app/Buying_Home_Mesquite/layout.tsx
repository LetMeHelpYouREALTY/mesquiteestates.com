import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Buying a Home in Mesquite, NV | Step-by-Step Guide" },
  description: "How buying a home in Mesquite, Nevada works: the process step by step, price ranges, and how to find the right home or custom lot.",
};

export default function BuyingHomeMesquiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
