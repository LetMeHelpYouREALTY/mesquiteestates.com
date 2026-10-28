import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import {
  DATA_AS_OF,
  SITE_PHONE,
  neighborhoods,
  type Fact,
  type Source,
} from "@/data/mesquiteEstates";

export function Hero({
  eyebrow,
  title,
  lead,
  bookingLabel,
  bookingUrl,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  bookingLabel: string;
  bookingUrl: string;
}) {
  return (
    <section className="text-center mb-14">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-600 mb-3">{eyebrow}</p>
      )}
      <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">{title}</h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">{lead}</p>
      <ContactButtons bookingLabel={bookingLabel} bookingUrl={bookingUrl} />
    </section>
  );
}

export function ContactButtons({
  bookingLabel,
  bookingUrl,
  dark = false,
}: {
  bookingLabel: string;
  bookingUrl: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={`tel:${SITE_PHONE}`}
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg"
      >
        📞 Call/Text {SITE_PHONE}
      </a>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          dark
            ? "inline-block bg-white hover:bg-gray-100 text-indigo-900 font-semibold px-8 py-3 rounded-lg transition duration-300"
            : "inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
        }
      >
        📅 {bookingLabel}
      </a>
    </div>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-3xl mx-auto mb-12 space-y-4">
      {paragraphs.map((p) => (
        <p key={p} className="text-base sm:text-lg text-gray-700 leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

export function FactGrid({ title, facts }: { title: string; facts: Fact[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6">{title}</h2>
      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {facts.map((f) => (
          <div key={f.label} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <dt className="text-sm font-medium text-gray-500">{f.label}</dt>
            <dd className="mt-1 text-lg font-semibold text-gray-900">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function PriceTable({ title, rows }: { title: string; rows: Fact[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6">{title}</h2>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-left">
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                <th scope="row" className="px-4 py-3 font-medium text-gray-700">
                  {r.label}
                </th>
                <td className="px-4 py-3 text-right font-semibold text-gray-900 whitespace-nowrap">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Points({ title, points }: { title: string; points: string[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6">{title}</h2>
      <ul className="space-y-3">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-gray-700">
            <span className="text-orange-500 font-bold" aria-hidden="true">
              ✓
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Listings({ title }: { title: string }) {
  return (
    <section id="listings" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">
        Live MLS listings across Mesquite. Ask Dr. Jan for the ones inside your neighborhood.
      </p>
      <realscout-office-listings
        agent-encoded-id="QWdlbnQtMjI1MDUw"
        sort-order="NEWEST"
        listing-status="For Sale"
      ></realscout-office-listings>
    </section>
  );
}

export function CtaBand({
  title,
  text,
  bookingLabel,
  bookingUrl,
}: {
  title: string;
  text: string;
  bookingLabel: string;
  bookingUrl: string;
}) {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 sm:p-10 rounded-lg text-center shadow-lg mb-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-6 text-indigo-100 max-w-2xl mx-auto">{text}</p>
      <ContactButtons bookingLabel={bookingLabel} bookingUrl={bookingUrl} dark />
    </section>
  );
}

export function NeighborhoodLinks({ exclude }: { exclude?: string }) {
  const list = neighborhoods.filter((n) => n.slug !== exclude);
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6">
        {exclude ? "Other Mesquite Estates neighborhoods" : "Neighborhoods inside Mesquite Estates"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((n) => (
          <Link
            key={n.slug}
            href={`/mesquite-estates/${n.slug}`}
            className="block bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md hover:border-indigo-300 transition"
          >
            <span className="block text-lg font-semibold text-indigo-900">{n.name}</span>
            <span className="block text-sm text-gray-600 mt-1">{n.tagline}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export const serviceLinks = [
  {
    href: "/mesquite-estates/new-construction-buyers",
    name: "New-build buyer representation",
    text: "Gatherings at Ridgemont and Val Vista. Your own agent, not the builder's.",
  },
  {
    href: "/mesquite-estates/lots-and-custom-homes",
    name: "Lots and custom homes",
    text: "Mohave Ridge and Bella Horizon homesites, from lot to finished home.",
  },
  {
    href: "/mesquite-estates/sell-your-home",
    name: "Selling against new builds",
    text: "A pricing plan for resale sellers in a 6-month-supply market.",
  },
];

export function ServiceLinks({ exclude }: { exclude?: string }) {
  const list = serviceLinks.filter((s) => s.href !== exclude);
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6">How Dr. Jan helps in Mesquite Estates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {list.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block bg-indigo-50 border border-indigo-100 rounded-lg p-5 hover:bg-indigo-100 transition"
          >
            <span className="block text-lg font-semibold text-indigo-900">{s.name}</span>
            <span className="block text-sm text-gray-700 mt-1">{s.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SourcesNote({ sources }: { sources: Source[] }) {
  return (
    <section className="border-t border-gray-200 pt-6 text-sm text-gray-500">
      <p className="mb-2">
        Figures checked {DATA_AS_OF} against the public sources below. Prices and incentives change often; confirm
        before you buy or list.
      </p>
      <ul className="space-y-1">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-700">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  const items = [{ name: "Home", path: "" }, ...trail];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteConfig.url}${it.path}`,
    })),
  };
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        {items.map((it, i) => (
          <span key={it.path}>
            {i > 0 && <span className="mx-2">/</span>}
            {i < items.length - 1 ? (
              <Link href={it.path || "/"} className="hover:text-indigo-700">
                {it.name}
              </Link>
            ) : (
              <span className="text-gray-700">{it.name}</span>
            )}
          </span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto pt-28 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-24 xl:px-40">{children}</div>;
}
