import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { LuxeHero, FaqBlock, CtaBand, Eyebrow, SourceNote, Breadcrumbs, StatBand } from "@/components/luxe/Luxe";
import { IMAGES, type Stat } from "@/data/mesquiteEstates";

export const metadata: Metadata = {
  title: { absolute: "Mesquite Estates Market Report | November 2026" },
  description:
    "Mesquite Estates and Mesquite, NV home prices: Sept 2026 medians, luxury-tier sales, inventory and days on market, with dated MLS sources.",
};

const ESTATES: Stat[] = [
  { value: "4", label: "Mesquite Estates closings, September 2026", source: "sept2026" },
  { value: "$606K", label: "Median Mesquite Estates sale, September 2026", source: "sept2026" },
  { value: "29", label: "Median days on market for those sales", source: "sept2026" },
  { value: "55", label: "Mesquite Estates homes sold over the prior 13 months", source: "community" },
];

const CITY: { h3: string; value: string; body: string }[] = [
  { h3: "Single-Family Median, Last 12 Months", value: "$440,000", body: "532 detached homes sold, down about 3% from $454,000 the year before. Median $256 per sq ft." },
  { h3: "Homes for Sale, September 2026", value: "324", body: "Up from 173 a year earlier — about 6 months of supply at the current pace, versus about 3." },
  { h3: "Sale-to-List Ratio", value: "≈ 98%", body: "Homes that sold closed near their final list price. Single-family homes took a median 88 days to go under contract." },
  { h3: "Luxury Share", value: "8%", body: "59 of 737 Mesquite residential sales closed at $700K+ in the 12 months to early October 2026; 21 closed at $1M+." },
];

export default function MarketReport() {
  return (
    <>
      <Navbar />
      <main>
        <LuxeHero
          image={IMAGES.townAerial}
          eyebrow="Updated November 4, 2026"
          title="Mesquite Estates Real Estate Market Report"
          subtitle="Closed-sale medians for Mesquite Estates and the wider Mesquite market. Small samples swing month to month, so read the 12-month trend first."
          primary={{ href: "/sell-your-mesquite-home", label: "Get Your Home's Value" }}
        />
        <Breadcrumbs items={[{ name: "Mesquite Estates", href: "/" }, { name: "Market Report", href: "/mesquite-estates/market-report" }]} />

        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-8">
            <Eyebrow>Mesquite Estates</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Mesquite Estates Sales, September 2026</h2>
          </div>
        </section>
        <StatBand stats={ESTATES} />

        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
            <Eyebrow>City of Mesquite</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">How the Wider Mesquite Market Is Moving</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {CITY.map((c) => (
                <div key={c.h3} className="bg-white p-8 shadow-sm">
                  <h3 className="font-display text-2xl font-semibold text-ink">{c.h3}</h3>
                  <p className="mt-3 font-display text-5xl font-semibold text-clay">{c.value}</p>
                  <p className="mt-3 text-ink/80">{c.body}</p>
                </div>
              ))}
            </div>
            <SourceNote keys={["cityMarket", "sept2026", "luxury"]} className="mt-8" />
          </div>
        </section>

        <section className="bg-dune/60">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-8">
            <h2 className="font-display text-4xl font-semibold text-ink">What This Means for Mesquite Estates Buyers and Sellers</h2>
            <h3 className="mt-8 font-display text-2xl font-semibold text-ink">For Buyers</h3>
            <p className="mt-3 text-lg text-ink/80">
              Citywide inventory nearly doubled year over year, so you have room to negotiate. In the upper tier, though, only 27 Mesquite
              homes were listed at $700K+ on October 12, 2026. The best view lots still move.
            </p>
            <h3 className="mt-8 font-display text-2xl font-semibold text-ink">For Sellers</h3>
            <p className="mt-3 text-lg text-ink/80">
              Price to same-enclave comps, not the citywide median. Mesquite Estates&rsquo; 4 September closings sold in a median 29
              days, but a sample that small can swing widely month to month.
            </p>
            <SourceNote keys={["luxury", "sept2026", "cityMarket"]} className="mt-6" />
          </div>
        </section>

        <FaqBlock
          title="Mesquite Market FAQs"
          faqs={[
            { question: "What is the median home price in Mesquite, NV?", answer: "Mesquite single-family homes sold for a median of $440,000 over the 12 months through early November 2026, down about 3% from $454,000 the year before." },
            { question: "How fast are Mesquite Estates homes selling?", answer: "The 4 Mesquite Estates homes that closed in September 2026 sold in a median of 29 days, at a $606,000 median price." },
            { question: "How many Mesquite homes sell for over $1 million?", answer: "In the 12 months to early October 2026, 21 of 737 Mesquite residential sales closed at $1 million or more." },
          ]}
        />
        <CtaBand title="Want the Numbers for Your Street?" body="Get a same-enclave CMA with active, pending and sold comps from Dr. Jan Duffy." />
      </main>
      <Footer />
    </>
  );
}
