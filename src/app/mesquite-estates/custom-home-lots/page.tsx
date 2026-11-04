import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { LuxeHero, FaqBlock, CtaBand, SourceNote, Breadcrumbs, SplitFeature, Eyebrow } from "@/components/luxe/Luxe";
import { IMAGES } from "@/data/mesquiteEstates";

export const metadata: Metadata = {
  title: { absolute: "Land to Build a Home in Mesquite Estates | Mesquite, NV" },
  description:
    "Buying land to build a home in Mesquite Estates: Mohave Ridge lots $165K–$205K (Oct 2026), minimum home sizes, 3-car garages and the 6-month rule to start building.",
};

const STEPS = [
  { h3: "Read the HOA Building Rules", body: "Check the minimum home size, height limits, materials and whether you must use a certain builder. Mohave Ridge lists a specific builder (View Point Contractors)." },
  { h3: "Check the Build Deadline", body: "Mohave Ridge requires building to start within 6 months of buying the lot. Have plans and bids ready first." },
  { h3: "Test the Soil", body: "Hillside lots and lots near dry creek beds can need extra foundation work. Price that before you commit." },
  { h3: "Confirm Utilities and Flood Zone", body: "Lot listings note city water and sewer to the property. Verify connection costs and check FEMA flood maps for lots near washes." },
  { h3: "Plan for HOA Design Approval", body: "The HOA must approve your plans before the City of Mesquite issues building permits. Build review time into your schedule." },
  { h3: "Budget Both HOA Layers", body: "Mesquite Estates owners pay community HOA dues plus a separate neighborhood fee. One Mohave Ridge lot listed $110 a month." },
];

export default function CustomLots() {
  return (
    <>
      <Navbar />
      <main>
        <LuxeHero
          image={IMAGES.lot}
          eyebrow="Build in Mesquite Estates"
          title="Land to Build Your Own Home in Mesquite Estates"
          subtitle="Quarter- to third-acre view lots north of I-15. Know the rules before you buy the dirt."
        />
        <Breadcrumbs items={[{ name: "Mesquite Estates", href: "/" }, { name: "Custom Home Lots", href: "/mesquite-estates/custom-home-lots" }]} />

        <SplitFeature image={IMAGES.mohaveRidge} eyebrow="Mohave Ridge Land" title="What Lots Cost Right Now">
          <p>
            In October 2026, six Mohave Ridge lots were listed from $165,000 (0.23 acre) to $205,000 (0.26 acre). Mohave Ridge is a
            19-home neighborhood next to the Lincoln County line with trail access.
          </p>
          <p>
            Since 2024, three Bella Horizon lots sold at a median of $170,000. Finished Mohave Ridge homes sold at a median of about
            $1.39 million.
          </p>
          <SourceNote keys={["mohaveLot", "luxury"]} />
        </SplitFeature>

        <section className="bg-dune/60">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
            <Eyebrow>Checklist</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Six Steps Before You Buy a Lot</h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((s, i) => (
                <li key={s.h3} className="bg-white p-6 shadow-sm">
                  <span className="font-display text-4xl font-semibold text-clay">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{s.h3}</h3>
                  <p className="mt-3 text-ink/80">{s.body}</p>
                </li>
              ))}
            </ol>
            <SourceNote keys={["mohaveLot", "luxury"]} className="mt-8" />
          </div>
        </section>

        <SplitFeature image={IMAGES.garage} eyebrow="Design Minimums" title="Mohave Ridge Building Requirements" reverse>
          <p>Perimeter home sites require at least 2,300 sq ft. Interior sites require at least 2,100 sq ft.</p>
          <p>Every home needs a three-car garage or larger. Eight of 10 Mohave Ridge home sales noted RV parking.</p>
          <SourceNote keys={["mohaveLot", "luxury"]} />
        </SplitFeature>

        <FaqBlock
          title="Custom Lot FAQs"
          faqs={[
            { question: "How much is a lot in Mesquite Estates?", answer: "In October 2026, Mohave Ridge lots were listed from $165,000 to $205,000 for 0.23 to 0.29 acre. Bella Horizon lot sales since 2024 had a $170,000 median." },
            { question: "How soon must I build on a Mohave Ridge lot?", answer: "The lot listings say building must start within 6 months of buying the lot." },
            { question: "What is the minimum home size in Mohave Ridge?", answer: "2,300 sq ft on perimeter home sites and 2,100 sq ft on interior sites, with at least a three-car garage." },
          ]}
        />
        <CtaBand title="Shopping for a View Lot?" body="Get a lot-by-lot shortlist with views, HOA dues and builder rules for each." />
      </main>
      <Footer />
    </>
  );
}
