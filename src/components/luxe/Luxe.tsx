import Image from "next/image";
import Link from "next/link";
import OfficeListings from "@/components/common/OfficeListings";
import { CONTACT, SOURCES, type SiteImage, type SourceKey, type Stat } from "@/data/mesquiteEstates";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">{children}</p>
  );
}

export function LuxeHero({
  image,
  eyebrow,
  title,
  subtitle,
  primary = { href: "/mesquite-estates/homes-for-sale", label: "Search Mesquite Estates Homes" },
  secondary = { href: CONTACT.phoneHref, label: `Call or Text ${CONTACT.phone}` },
  priority = true,
}: {
  image: SiteImage;
  eyebrow: string;
  title: string;
  subtitle: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  priority?: boolean;
}) {
  return (
    <>
    <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden bg-ink text-sand">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="-z-10 object-cover opacity-80"
        style={{ objectPosition: image.position ?? "center" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden />
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-8 sm:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-dune">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dune sm:text-xl">{subtitle}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center rounded-full bg-clay px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-clay-dark"
          >
            {primary.label}
          </Link>
          <a
            href={secondary.href}
            className="inline-flex items-center justify-center rounded-full border border-sand/60 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-sand transition hover:bg-sand hover:text-ink"
          >
            {secondary.label}
          </a>
        </div>
      </div>
    </section>
    <OfficeListings />
    </>
  );
}

export function SourceNote({ keys, className = "" }: { keys: SourceKey[]; className?: string }) {
  const unique = Array.from(new Set(keys));
  return (
    <p className={`text-xs leading-relaxed text-mesa ${className}`}>
      Sources:{" "}
      {unique.map((k, i) => (
        <span key={k}>
          <a href={SOURCES[k].url} rel="nofollow noopener" target="_blank" className="underline decoration-dotted underline-offset-2 hover:text-clay">
            {SOURCES[k].label}
          </a>
          {i < unique.length - 1 ? "; " : "."}
        </span>
      ))}{" "}
      Prices are middle (median) values from a small number of sales. Ask for current numbers on any specific home.
    </p>
  );
}

export function StatBand({ stats, dark = false }: { stats: Stat[]; dark?: boolean }) {
  return (
    <section className={dark ? "bg-ink text-sand" : "bg-dune/60 text-ink"}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
        <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-clay/40 pt-5">
              <dt className={`text-sm leading-snug ${dark ? "text-dune" : "text-mesa"}`}>{s.label}</dt>
              <dd className="mt-2 font-display text-5xl font-semibold text-clay">{s.value}</dd>
            </div>
          ))}
        </dl>
        <SourceNote keys={stats.map((s) => s.source)} className="mt-8" />
      </div>
    </section>
  );
}

export function SplitFeature({
  image,
  eyebrow,
  title,
  children,
  reverse = false,
}: {
  image: SiteImage;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="bg-sand">
      <div className={`mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <figure className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl shadow-ink/20">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" style={{ objectPosition: image.position ?? "center" }} />
          <figcaption className="absolute bottom-2 right-3 text-[10px] uppercase tracking-widest text-white/70">Illustrative image</figcaption>
        </figure>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">{title}</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function FaqBlock({ title, faqs }: { title: string; faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-8">
        <Eyebrow>Answers</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">{title}</h2>
        <div className="mt-10 divide-y divide-mesa/30 border-y border-mesa/30">
          {faqs.map((f) => (
            <details key={f.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <h3 className="font-display text-2xl font-semibold text-ink">{f.question}</h3>
                <span className="mt-1 text-2xl text-clay transition group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}

export function CtaBand({ title, body }: { title: string; body: string }) {
  return (
    <section className="bg-ink text-sand">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-dune">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={CONTACT.phoneHref} className="inline-flex items-center justify-center rounded-full bg-clay px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-clay-dark">
            Call {CONTACT.phone}
          </a>
          <a href={CONTACT.smsHref} className="inline-flex items-center justify-center rounded-full border border-sand/60 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition hover:bg-sand hover:text-ink">
            Text Dr. Jan
          </a>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const base = "https://www.mesquiteestates.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${base}${it.href}` })),
  };
  return (
    <nav aria-label="Breadcrumb" className="bg-sand">
      <ol className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-4 text-xs uppercase tracking-widest text-mesa sm:px-8">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i < items.length - 1 ? <Link href={it.href} className="hover:text-clay">{it.name}</Link> : <span className="text-ink">{it.name}</span>}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </nav>
  );
}

export function AgentCard() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-clay/50 bg-ink font-display text-3xl font-semibold text-sand" aria-hidden>
        JD
      </div>
      <div>
        <p className="font-display text-2xl font-semibold text-ink">Dr. Jan Duffy, REALTOR®</p>
        <p className="text-sm text-mesa">{CONTACT.brokerage} · NV License {CONTACT.license}</p>
        <p className="mt-1 text-sm text-mesa">Licensed since 2008 · 35 years in Las Vegas</p>
      </div>
    </div>
  );
}
