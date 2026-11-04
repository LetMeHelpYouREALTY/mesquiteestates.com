import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { LuxeHero, FaqBlock, CtaBand, Eyebrow, SourceNote, Breadcrumbs } from "@/components/luxe/Luxe";
import { ENCLAVES } from "@/data/mesquiteEstates";
import { ogFor } from "@/config/og";

export const dynamicParams = false;

export function generateStaticParams() {
  return ENCLAVES.map((e) => ({ enclave: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ enclave: string }> }): Promise<Metadata> {
  const { enclave } = await params;
  const e = ENCLAVES.find((x) => x.slug === enclave);
  if (!e) return {};
  const title = `${e.name} Homes for Sale | Mesquite Estates, NV`;
  const description = e.summary.length > 158 ? `${e.summary.slice(0, 155).replace(/\s+\S*$/, "")}…` : e.summary;
  return { ...ogFor(title, description, `/mesquite-estates/${e.slug}`, e.image), title: { absolute: title }, description };
}

export default async function EnclavePage({ params }: { params: Promise<{ enclave: string }> }) {
  const { enclave } = await params;
  const e = ENCLAVES.find((x) => x.slug === enclave);
  if (!e) notFound();
  const others = ENCLAVES.filter((x) => x.slug !== e.slug);
  const sourceKeys = e.facts.map((f) => f.source);

  return (
    <>
      <Navbar />
      <main>
        <LuxeHero
          image={e.image}
          eyebrow={`Mesquite Estates · ${e.ageRestricted ? "55+ Community · " : ""}Mesquite, NV 89027`}
          title={`${e.name} Homes for Sale in Mesquite Estates`}
          subtitle={e.summary}
        />
        <Breadcrumbs
          items={[
            { name: "Mesquite Estates", href: "/" },
            { name: "Neighborhoods", href: "/mesquite-estates/neighborhoods" },
            { name: e.name, href: `/mesquite-estates/${e.slug}` },
          ]}
        />

        <section className="bg-sand" aria-labelledby="facts">
          <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-8">
            <Eyebrow>By the Numbers</Eyebrow>
            <h2 id="facts" className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">{e.name} Market Facts</h2>
            <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {e.facts.map((f) => (
                <div key={f.label} className="border-t border-clay/40 pt-4">
                  <dt className="text-sm uppercase tracking-widest text-mesa">{f.label}</dt>
                  <dd className="mt-2 font-display text-3xl font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
            <SourceNote keys={sourceKeys} className="mt-8" />
          </div>
        </section>

        {e.sections.map((s, i) => (
          <section key={s.h2} className={i % 2 === 0 ? "bg-dune/60" : "bg-sand"}>
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-8">
              <h2 className="font-display text-4xl font-semibold text-ink">{s.h2}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">{s.body}</p>
              {s.h3s && (
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {s.h3s.map((h) => (
                    <div key={h.h3} className="bg-white p-6 shadow-sm">
                      <h3 className="font-display text-2xl font-semibold text-ink">{h.h3}</h3>
                      <p className="mt-3 text-ink/80">{h.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}


        <FaqBlock title={`${e.name} FAQs`} faqs={e.faqs} />

        <section className="bg-dune/60" aria-labelledby="more">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
            <h2 id="more" className="font-display text-4xl font-semibold text-ink">Compare Other Mesquite Estates Neighborhoods</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => (
                <Link key={o.slug} href={`/mesquite-estates/${o.slug}`} className="group block bg-white shadow-sm hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={o.image.src} alt={o.image.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition group-hover:scale-105" style={{ objectPosition: o.image.position ?? "center" }} />
                  </div>
                  <h3 className="p-4 font-display text-2xl font-semibold text-ink group-hover:text-clay">{o.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title={`Ready to Tour ${e.name}?`} body="Get recent sale prices, HOA details and a private showing plan from Dr. Jan Duffy." />
      </main>
      <Footer />
    </>
  );
}
