import type { Metadata } from "next";

// Template/demo content (not real Mesquite listings or market data) — keep out of Google's index.
export const metadata: Metadata = {
  title: { absolute: "Login | Mesquite Estates" },
  robots: { index: false, follow: true },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
