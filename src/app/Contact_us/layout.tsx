import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...ogFor("Contact Dr. Jan Duffy | Mesquite, NV Real Estate", "Call, text, email, or visit Dr. Jan Duffy, BHHS Nevada Properties, for help buying or selling a home in Mesquite, Nevada.", "/Contact_us", IMAGES.entry),
  title: { absolute: "Contact Dr. Jan Duffy | Mesquite, NV Real Estate" },
  description: "Call, text, email, or visit Dr. Jan Duffy, BHHS Nevada Properties, for help buying or selling a home in Mesquite, Nevada.",
};

export default function ContactusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
