import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FloatingCTA from "@/components/common/FloatingCTA";
import StructuredData from "@/components/seo/StructuredData";
import { LuxeHero, StatBand, SplitFeature, FaqBlock, CtaBand, Eyebrow, SourceNote, AgentCard } from "@/components/luxe/Luxe";
import { ENCLAVES, HEADLINE_STATS, HOME_FAQS, IMAGES } from "@/data/mesquiteEstates";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: { absolute: "Mesquite Estates Homes for Sale | View Homes & Custom Lots" },
  description:
    "Mesquite Estates, Mesquite NV: 36 sales at $700K+ since 2024 at a $920K median. View homes, gated enclaves and custom lots north of I-15 with Dr. Jan Duffy.",
  alternates: { canonical: siteConfig.url },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <LuxeHero
          image={IMAGES.hero}
          eyebrow="Mesquite Estates · Mesquite, Nevada 89027"
          title="Mesquite Estates Homes for Sale, Above the Virgin Valley"
          subtitle="Elevated view lots, gated custom enclaves and newer single-story homes on Mesquite's north side. Every number here comes from MLS sales, with dates and sources."
        />

        <StatBand stats={HEADLINE_STATS} />

        <SplitFeature image={IMAGES.poolTerrace} eyebrow="Why Mesquite Estates" title="Views Drive the Price Here, Not Golf Frontage">
          <p>
            Mesquite Estates sits on higher ground north of I-15. None of its 36 sales above $700,000 since January 2024 was listed as
            on a golf course. Buyers pay for mountain, mesa and city-light views instead.
          </p>
          <p>
            Most homes were built in 2020 or later. Typical master HOA dues run about $83 a month, before sub-association fees.
          </p>
          <SourceNote keys={["luxury", "community"]} />
        </SplitFeature>

        <section className="bg-sand" aria-labelledby="enclaves">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
            <Eyebrow>Neighborhoods</Eyebrow>
            <h2 id="enclaves" className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Mesquite Estates Enclaves, Compared
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-ink/80">
              Each enclave has its own HOA, rules and price band. Start with the one that fits how you live.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {ENCLAVES.map((e) => (
                <Link key={e.slug} href={`/mesquite-estates/${e.slug}`} className="group block overflow-hidden bg-white shadow-sm transition hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={e.image.src}
                      alt={e.image.alt}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={{ objectPosition: e.image.position ?? "center" }}
                    />
                    {e.ageRestricted && (
                      <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-sand">55+ community</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-3xl font-semibold text-ink group-hover:text-clay">{e.name}</h3>
                    <p className="mt-1 text-sm uppercase tracking-widest text-mesa">{e.tagline}</p>
                    <p className="mt-4 text-sm font-semibold text-clay">{e.facts[0].label}: {e.facts[0].value}</p>
                  </div>
                </Link>
              ))}
              <Link href="/mesquite-estates/neighborhoods" className="group flex flex-col justify-between bg-ink p-8 text-sand transition hover:bg-clay-dark">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-dune">Side by side</span>
                <span>
                  <span className="block font-display text-3xl font-semibold">Compare All Five Enclaves</span>
                  <span className="mt-3 block text-sm text-dune">Prices, lot sizes, HOA fees and build years in one table →</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-ink text-sand" aria-labelledby="search">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-8">
            <Eyebrow>Live MLS Search</Eyebrow>
            <h2 id="search" className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Search Mesquite Estates Listings</h2>
            <p className="mx-auto mt-4 max-w-2xl text-dune">
              Type &ldquo;Mesquite, NV&rdquo; and filter by price, lot size or pool. Save homes and get new-listing alerts.
            </p>
            <div className="mt-10 flex justify-center">
              <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
            </div>
          </div>
        </section>

        <SplitFeature image={IMAGES.lot} eyebrow="Build Your Own" title="Custom Home Lots in Mesquite Estates" reverse>
          <p>
            In October 2026, Mohave Ridge listed quarter- to third-acre lots from $165,000 to $205,000. Its rules require a home of at
            least 2,100 sq ft, a three-car garage, and construction starting within 6 months of closing.
          </p>
          <p>
            <Link href="/mesquite-estates/custom-home-lots" className="font-semibold text-clay underline underline-offset-4">
              Read the lot-buying checklist →
            </Link>
          </p>
          <SourceNote keys={["mohaveLot"]} />
        </SplitFeature>

        <section className="bg-dune/60" aria-labelledby="services">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-8 lg:grid-cols-3">
            <div>
              <Eyebrow>Realtor Services</Eyebrow>
              <h2 id="services" className="mt-4 font-display text-4xl font-semibold text-ink">Hyper-Focused on One Master Plan</h2>
              <div className="mt-8"><AgentCard /></div>
            </div>
            <div className="space-y-8 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
              {[
                { h: "Pricing by Enclave", b: "Comps pulled from the same sub-association, not citywide medians. In September 2026, Mesquite Estates closed 4 homes at a $606K median." },
                { h: "View and CC&R Review", b: "We check sightlines, height limits and vacant lots before you pay a view premium. Views are rarely protected." },
                { h: "Resale Package Review", b: "Nevada NRS 116.4109 gives buyers 5 days to cancel after receiving the HOA resale package. We read it with you." },
                { h: "Custom-Build Coordination", b: "Architectural review, utility connections, soils report and builder bids, lined up before you close on land." },
              ].map((s) => (
                <div key={s.h} className="border-t border-clay/40 pt-5">
                  <h3 className="font-display text-2xl font-semibold text-ink">{s.h}</h3>
                  <p className="mt-3 text-ink/80">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SplitFeature image={IMAGES.cityLights} eyebrow="Location" title="80 Miles From Las Vegas, Minutes From the Mesas">
          <p>
            Mesquite is in Clark County next to the Arizona line, about 80 miles northeast of Las Vegas on I-15. The city has nine
            championship golf courses and more than 300 days of sunshine a year.
          </p>
          <SourceNote keys={["visit"]} />
        </SplitFeature>

        <FaqBlock title="Mesquite Estates Questions, Answered" faqs={HOME_FAQS} />

        <CtaBand
          title="Thinking About Mesquite Estates?"
          body="Get enclave-level comps and a showing plan built around your timeline. Call or text Dr. Jan."
        />
      </main>
      <FloatingCTA />
      <Footer />
    </>
  );
}
