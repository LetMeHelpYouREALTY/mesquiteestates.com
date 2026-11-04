import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { LuxeHero, CtaBand, Eyebrow, SourceNote, Breadcrumbs } from "@/components/luxe/Luxe";
import { ENCLAVES, IMAGES } from "@/data/mesquiteEstates";

export const metadata: Metadata = {
  title: { absolute: "Mesquite Estates Neighborhoods | Enclaves Compared" },
  description:
    "Compare Mesquite Estates enclaves: Mohave Ridge, Bella Horizon, Cambria, Royal Vista and Gatherings at Ridgemont 55+. Prices, lots, HOA fees and build years.",
};

export default function Neighborhoods() {
  return (
    <>
      <Navbar />
      <main>
        <LuxeHero
          image={IMAGES.townAerial}
          eyebrow="Mesquite Estates · North of I-15"
          title="Mesquite Estates Neighborhoods"
          subtitle="Five enclaves, five sets of rules. Compare price bands, lot sizes, HOA fees and build years side by side."
        />
        <Breadcrumbs items={[{ name: "Mesquite Estates", href: "/" }, { name: "Neighborhoods", href: "/mesquite-estates/neighborhoods" }]} />
        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-8">
            <Eyebrow>Side by Side</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Mesquite Estates Enclaves at a Glance</h2>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="border-b-2 border-clay/50 text-xs uppercase tracking-widest text-mesa">
                  <tr>
                    <th className="py-3 pr-4">Enclave</th>
                    <th className="py-3 pr-4">Headline figure</th>
                    <th className="py-3 pr-4">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {ENCLAVES.map((e) => (
                    <tr key={e.slug} className="border-b border-mesa/20 align-top">
                      <td className="py-4 pr-4">
                        <Link href={`/mesquite-estates/${e.slug}`} className="font-display text-xl font-semibold text-ink hover:text-clay">{e.name}</Link>
                        {e.ageRestricted && <span className="ml-2 text-xs font-semibold uppercase text-clay">55+</span>}
                      </td>
                      <td className="py-4 pr-4 text-ink/80">{e.facts[0].label}: <strong>{e.facts[0].value}</strong></td>
                      <td className="py-4 pr-4 text-ink/80">{e.facts[1] ? `${e.facts[1].label}: ${e.facts[1].value}` : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <SourceNote keys={ENCLAVES.flatMap((e) => e.facts.slice(0, 2).map((f) => f.source))} className="mt-6" />

            <div className="mt-16 grid gap-10 md:grid-cols-2">
              {ENCLAVES.map((e) => (
                <article key={e.slug} className="bg-white shadow-sm">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={e.image.src} alt={e.image.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" style={{ objectPosition: e.image.position ?? "center" }} />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-3xl font-semibold text-ink">{e.name}</h3>
                    <p className="mt-1 text-sm uppercase tracking-widest text-mesa">{e.tagline}</p>
                    <p className="mt-4 text-ink/80">{e.summary}</p>
                    <Link href={`/mesquite-estates/${e.slug}`} className="mt-6 inline-block font-semibold text-clay underline underline-offset-4">
                      {e.name} details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <CtaBand title="Not Sure Which Enclave Fits?" body="Tell Dr. Jan your must-haves: view, lot size, RV parking, gate, 55+. Get a shortlist with comps." />
      </main>
      <Footer />
    </>
  );
}
