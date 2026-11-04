import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About Mesquite, NV | Virgin River Valley Living" },
  description: "Mesquite, Nevada at a glance: Virgin River Valley location, red mesa views, championship golf courses, and recreation an hour from Las Vegas.",
};

export default function AboutMesquiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
