import { Metadata } from 'next';

export const metadata: Metadata = {
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

