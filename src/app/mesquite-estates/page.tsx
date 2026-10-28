import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import {
  Breadcrumbs,
  CtaBand,
  FactGrid,
  Hero,
  Listings,
  NeighborhoodLinks,
  PageFrame,
  PriceTable,
  Prose,
  ServiceLinks,
  SourcesNote,
} from "@/components/mesquite-estates/blocks";
import { BOOKING, masterPlan, mesquiteMarket, pageTitle } from "@/data/mesquiteEstates";
import { siteConfig } from "@/config/siteConfig";

const title = "Mesquite Estates Homes, Lots & New Builds";
const description =
  "Mesquite Estates in Mesquite, NV: neighborhood-by-neighborhood prices, HOA dues and recent sales for Gatherings at Ridgemont, Val Vista, Mohave Ridge, Bella Horizon, Royal Vista and Sierra Ridge.";

export const metadata: Metadata = {
  title: pageTitle(title),
  description,
  alternates: { canonical: "/mesquite-estates" },
  openGraph: { title, description, url: "/mesquite-estates" },
};

const agentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy",
  url: `${siteConfig.url}/mesquite-estates`,
  telephone: "+1-702-718-2228",
  areaServed: {
    "@type": "Place",
    name: "Mesquite Estates",
    address: { "@type": "PostalAddress", addressLocality: "Mesquite", addressRegion: "NV", postalCode: "89027", addressCountry: "US" },
  },
  knowsAbout: [
    "Mesquite Estates",
    "Gatherings at Ridgemont",
    "Val Vista",
    "Mohave Ridge",
    "Bella Horizon",
    "Royal Vista",
    "Sierra Ridge",
    "New construction buyer representation",
  ],
};

export default function MesquiteEstatesHub() {
  const m = mesquiteMarket;
  return (
    <>
      <Navbar />
      <PageFrame>
        <Breadcrumbs trail={[{ name: "Mesquite Estates", path: "/mesquite-estates" }]} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }} />
        <Hero
          eyebrow="Mesquite, NV 89027 · North of I-15"
          title="Mesquite Estates: Homes, Lots and New Builds"
          lead="One master plan, many small neighborhoods, and sales from the high $300s to nearly $1.5 million. Here's what each one costs."
          bookingLabel="Book a 15-minute market call"
          bookingUrl={BOOKING.marketCall}
        />
        <Prose
          paragraphs={[
            "Mesquite Estates covers most of the north side of Mesquite, west of the airport and Wolf Creek Golf Club. Nearly all of it was built after 2010, and most homes after 2020.",
            `It isn't one market. Since January 2024, ${masterPlan.luxury.sales} Mesquite Estates homes sold for $700,000 or more, at a median of ${masterPlan.luxury.median}. Meanwhile, 55+ new builds a few streets away start under $390,000. City-wide averages won't tell you what your street is worth. The neighborhood pages below will.`,
          ]}
        />
        <FactGrid title="Mesquite Estates at a glance" facts={masterPlan.facts} />
        <NeighborhoodLinks />
        <p className="text-gray-600 -mt-6 mb-12">
          Also part of Mesquite Estates: {masterPlan.otherAreas.join(", ")}. Ask for recent sales in any of them.
        </p>
        <PriceTable
          title={`The Mesquite market, ${m.month}`}
          rows={[
            { label: "Homes for sale city-wide", value: `${m.activeListings} (vs ${m.activeYearAgo} a year ago)` },
            { label: "Supply", value: `${m.monthsSupply} months` },
            { label: "Median sale price", value: `${m.medianSale} (vs ${m.medianSaleYearAgo})` },
            { label: "Sale price vs. asking", value: m.saleToList },
            { label: "Typical days to sell", value: `${m.daysToSell}` },
          ]}
        />
        <Prose
          paragraphs={[
            "More homes for sale means buyers can negotiate and sellers need sharper pricing. In Mesquite Estates, resale homes also compete with builder incentives just down the street.",
          ]}
        />
        <ServiceLinks />
        <Listings title="Current Mesquite listings" />
        <CtaBand
          title="Get your Mesquite Estates numbers"
          text="Tell me the neighborhood or street. I'll pull recent sales, days on market and what's listed now."
          bookingLabel="Book a 15-minute market call"
          bookingUrl={BOOKING.marketCall}
        />
        <SourcesNote sources={[...masterPlan.sources, m.source]} />
      </PageFrame>
      <Footer />
    </>
  );
}
