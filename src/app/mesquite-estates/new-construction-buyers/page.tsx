import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import {
  Breadcrumbs,
  CtaBand,
  Hero,
  Listings,
  PageFrame,
  Points,
  Prose,
  ServiceLinks,
  SourcesNote,
} from "@/components/mesquite-estates/blocks";
import { BOOKING, getNeighborhood, mesquiteMarket, pageTitle } from "@/data/mesquiteEstates";

const path = "/mesquite-estates/new-construction-buyers";
const title = "New Construction Buyer's Agent in Mesquite Estates";
const description =
  "Buying a new build at Gatherings at Ridgemont or Val Vista? Get your own agent before you tour. Compare incentives, plans and lot premiums before you sign.";

export const metadata: Metadata = {
  title: pageTitle(title),
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function NewConstructionBuyers() {
  const ridgemont = getNeighborhood("gatherings-at-ridgemont")!;
  const valVista = getNeighborhood("val-vista")!;
  const rows = [
    ["Builder", "Beazer Homes", "Nevada Residential Construction"],
    ["Age requirement", "55+ age-qualified", "None listed"],
    ["Starting price", "$389,990", "$382,000"],
    ["Home sizes", "1,551–2,191 sq ft", "1,453–2,056 sq ft"],
    ["HOA", "$107/month", "$80/month"],
    ["Current incentive", "Advertised through Nov 30, 2026; varies by homesite", "$5,000 landscaping allowance + upgrades (October)"],
  ];

  return (
    <>
      <Navbar />
      <PageFrame>
        <Breadcrumbs
          trail={[
            { name: "Mesquite Estates", path: "/mesquite-estates" },
            { name: "New-build buyers", path },
          ]}
        />
        <Hero
          eyebrow="Mesquite Estates new construction"
          title="Your Own Agent for a Mesquite Estates New Build"
          lead="The builder's sales team works for the builder. Dr. Jan works for you. Many builders offer compensation to a registered buyer's agent; we confirm this builder's policy in writing before you tour."
          bookingLabel="Book a new-build buyer consult"
          bookingUrl={BOOKING.buyer}
        />
        <Prose
          paragraphs={[
            "Two production and semi-custom builders are selling inside Mesquite Estates right now: Beazer Homes at Gatherings at Ridgemont, and Nevada Residential Construction at Val Vista. Both are offering incentives, and the incentives aren't the same.",
            "How you use incentive money matters. Spent on upgrades, it's part of the house. Spent on a rate buydown or closing costs, it can lower your payment for years. We run both options before you sign.",
          ]}
        />

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6">The two builders, side by side</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left min-w-[560px]">
              <thead className="bg-indigo-900 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3"></th>
                  <th scope="col" className="px-4 py-3">
                    <Link href={`/mesquite-estates/${ridgemont.slug}`} className="underline">
                      {ridgemont.name}
                    </Link>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <Link href={`/mesquite-estates/${valVista.slug}`} className="underline">
                      {valVista.name}
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, a, b], i) => (
                  <tr key={label} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                    <th scope="row" className="px-4 py-3 font-medium text-gray-700">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-gray-900">{a}</td>
                    <td className="px-4 py-3 text-gray-900">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Points
          title="What Dr. Jan handles for new-build buyers"
          points={[
            "Registering you with the builder before your first visit. Many builders won't pay a buyer's agent who wasn't there from the start, so call before you tour.",
            "Comparing quick move-in homes with to-be-built homesites. They carry different incentives, and the right pick depends on your timeline.",
            "Running the numbers on rate buydown vs. closing costs vs. upgrades before you commit the incentive.",
            "Reading the builder's purchase contract, lot premium and HOA documents with you, line by line.",
            "Lining up independent inspections during construction and before closing.",
            `Comparing your new build with resale. Mesquite homes built since 2024 closed at a ${mesquiteMarket.newBuildMedian} median across 12 sales, so compare nearby resales before you commit.`,
          ]}
        />
        <Listings title="Current Mesquite listings" />
        <CtaBand
          title="Touring a model this week?"
          text="Book a call first so you're registered as my buyer before your first visit. We'll confirm in writing how the builder handles buyer-agent compensation."
          bookingLabel="Book a new-build buyer consult"
          bookingUrl={BOOKING.buyer}
        />
        <ServiceLinks exclude={path} />
        <SourcesNote sources={[...ridgemont.sources, ...valVista.sources, mesquiteMarket.newBuildSource]} />
      </PageFrame>
      <Footer />
    </>
  );
}
