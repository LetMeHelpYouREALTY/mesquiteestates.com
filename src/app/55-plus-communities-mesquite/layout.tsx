import { ogFor } from "@/config/og";
import { IMAGES } from "@/data/mesquiteEstates";
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...ogFor('55+ Communities in Mesquite, NV | All 7 Compared', 'Compare Mesquite, NV 55+ communities: Sun City Mesquite (new from $349,990), Gatherings at Ridgemont, and 5 gated options. Prices, HOA fees, rules.', "/55-plus-communities-mesquite", IMAGES.clubhouse),
  title: { absolute: '55+ Communities in Mesquite, NV | All 7 Compared' },
  description: 'Compare Mesquite, NV 55+ communities: Sun City Mesquite (new from $349,990), Gatherings at Ridgemont, and 5 gated options. Prices, HOA fees, rules.',
  keywords: [
    '55+ communities Mesquite NV',
    'retire in Mesquite',
    'active adult communities Mesquite',
    '55+ living Mesquite',
    'Sun City Mesquite',
  ],
};

export default function FiftyFivePlusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

