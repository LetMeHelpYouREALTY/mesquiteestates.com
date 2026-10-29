import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mesquite Vistas Homes for Sale | Community',
  description: 'Mesquite Vistas homes for sale in Mesquite, Nevada. Community with scenic desert vistas. Call Dr. Jan Duffy 702-718-2228.',
};

export default function MesquiteVistasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

