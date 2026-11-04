import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { LuxeHero, CtaBand, Eyebrow, SourceNote, Breadcrumbs } from "@/components/luxe/Luxe";
import { ENCLAVES, IMAGES } from "@/data/mesquiteEstates";

export const metadata: Metadata = {
  title: { absolute: "Mesquite Estates Homes for Sale | Search All Listings" },
  description:
    "Search Mesquite Estates homes and lots for sale in Mesquite, NV 89027 updated daily. Save homes, get alerts and book private showings with Dr. Jan Duffy.",
};

export default function HomesForSale() {
  return (
    <>
      <Navbar />
      <main>
        <LuxeHero
          image={IMAGES.greatRoom}
          eyebrow="Updated Daily · Mesquite, NV 89027"
          title="Mesquite Estates Homes for Sale"
          subtitle="Search homes and lots for sale, save favorites and get an email when new ones come up. Then ask what similar homes nearby sold for before you make an offer."
          primary={{ href: "#search", label: "Start Your Search" }}
        />
        <Breadcrumbs items={[{ name: "Mesquite Estates", href: "/" }, { name: "Homes for Sale", href: "/mesquite-estates/homes-for-sale" }]} />

        <section id="search" className="scroll-mt-32 bg-sand">
          <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 text-center sm:px-8">
            <Eyebrow>Search</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Find Homes in Mesquite Estates</h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink/80">Enter &ldquo;Mesquite, NV&rdquo; and set your price, beds and lot size.</p>
            <div className="mt-10 flex justify-center">
              <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
            </div>
          </div>
        </section>


        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
            <h2 className="font-display text-4xl font-semibold text-ink">Browse by Neighborhood</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {ENCLAVES.map((e) => (
                <li key={e.slug}>
                  <Link href={`/mesquite-estates/${e.slug}`} className="block border border-mesa/30 bg-white p-5 hover:border-clay">
                    <h3 className="font-display text-xl font-semibold text-ink">{e.name}</h3>
                    <p className="mt-1 text-xs text-mesa">{e.facts[0].value}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <SourceNote keys={ENCLAVES.map((e) => e.facts[0].source)} className="mt-6" />
          </div>
        </section>
        <CtaBand title="See Something You Like?" body="Text the address to Dr. Jan for HOA details, recent nearby sales and a private showing." />
      </main>
      <Footer />
    </>
  );
}
