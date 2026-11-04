import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...ogFor('Sell Your Mesquite Home | Pricing & Marketing Plan', 'Sell your Mesquite home with Dr. Jan Duffy. Expert market analysis, professional marketing, and negotiation. Get your home\'s value. Call 702-718-2228.', "/sell-your-mesquite-home", IMAGES.entry),
  title: { absolute: 'Sell Your Mesquite Home | Pricing & Marketing Plan' },
  description: 'Sell your Mesquite home with Dr. Jan Duffy. Expert market analysis, professional marketing, and negotiation. Get your home\'s value. Call 702-718-2228.',
  keywords: [
    'sell home Mesquite',
    'Mesquite home values',
    'sell house Mesquite NV',
    'Mesquite realtor sell',
  ],
};

export default function SellYourHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

