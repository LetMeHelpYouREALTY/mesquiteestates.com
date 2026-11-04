import Link from "next/link";
import { ENCLAVES } from "@/data/mesquiteEstates";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Mesquite Estates",
    links: [
      { href: "/mesquite-estates/homes-for-sale", label: "Homes for Sale" },
      { href: "/mesquite-estates/neighborhoods", label: "All Neighborhoods" },
      { href: "/mesquite-estates/custom-home-lots", label: "Land to Build On" },
      { href: "/mesquite-estates/market-report", label: "Market Report" },
      { href: "/sell-your-mesquite-home", label: "Sell Your Home" },
    ],
  },
  {
    title: "Neighborhoods",
    links: ENCLAVES.map((e) => ({ href: `/mesquite-estates/${e.slug}`, label: e.name })),
  },
  {
    title: "Greater Mesquite",
    links: [
      { href: "/Sun_City_Mesquite", label: "Sun City Mesquite 55+" },
      { href: "/communities/falcon-ridge", label: "Falcon Ridge" },
      { href: "/communities/mesquite-vistas", label: "Mesquite Vistas" },
      { href: "/Golf_Homes_Mesquite", label: "Golf Homes" },
      { href: "/About_Mesquite", label: "About Mesquite" },
      { href: "/Mesquite_Weather", label: "Mesquite Weather" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-dune">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-semibold text-sand">
            Mesquite <span className="text-clay">Estates</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            Homes, land and local know-how for Mesquite Estates, north of I-15 in Mesquite, Nevada 89027.
          </p>
          <address className="mt-6 space-y-1 text-sm not-italic">
            <p className="text-sand">Dr. Jan Duffy, REALTOR®</p>
            <p>1155 W Pioneer Blvd, Suite 104-D</p>
            <p>Mesquite, NV 89027</p>
            <p>
              <a href="tel:+17027182228" className="hover:text-clay">702-718-2228</a>
            </p>
            <p>
              <a href="mailto:DrDuffy@MesquiteEstates.com" className="hover:text-clay">DrDuffy@MesquiteEstates.com</a>
            </p>
          </address>
        </div>
        {COLUMNS.map((c) => (
          <div key={c.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">{c.title}</p>
            <ul className="mt-5 space-y-3 text-sm">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-sand">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-mesa sm:px-8 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Mesquite Estates. All rights reserved. Equal Housing Opportunity.</p>
          <p>Berkshire Hathaway HomeServices Nevada Properties · Licensed since 2008 · NV License S.0197614.LLC</p>
        </div>
      </div>
    </footer>
  );
}
