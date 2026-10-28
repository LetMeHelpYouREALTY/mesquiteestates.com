import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Mesquite Real Estate Market Analysis',
  description: 'Comprehensive real estate market analysis for Mesquite, Nevada. View current market trends, median home prices, property types, and recent sales data for Mesquite Estates and surrounding areas.',
  keywords: [
    'Mesquite real estate market',
    'Mesquite market analysis',
    'Mesquite home prices',
    'Mesquite market trends',
    'Mesquite real estate statistics',
    'Dr. Jan Duffy market data',
    'Mesquite housing market',
    'Mesquite Estates market',
  ],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

