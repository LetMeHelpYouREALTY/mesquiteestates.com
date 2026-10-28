import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import {
  Breadcrumbs,
  CtaBand,
  Hero,
  PageFrame,
  Points,
  PriceTable,
  Prose,
  ServiceLinks,
  SourcesNote,
} from "@/components/mesquite-estates/blocks";
import { BOOKING, getNeighborhood, mesquiteMarket, pageTitle } from "@/data/mesquiteEstates";

const path = "/mesquite-estates/sell-your-home";
const title = "Selling a Mesquite Estates Home vs. New Builds";
const description =
  "Selling in Mesquite Estates? Mesquite has about 6 months of supply and builder incentives a few streets away. Get street-level comps and a pricing plan built for this market.";

export const metadata: Metadata = {
  title: pageTitle(title),
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function SellYourMesquiteEstatesHome() {
  const m = mesquiteMarket;
  const ridgemont = getNeighborhood("gatherings-at-ridgemont")!;

  return (
    <>
      <Navbar />
      <PageFrame>
        <Breadcrumbs
          trail={[
            { name: "Mesquite Estates", path: "/mesquite-estates" },
            { name: "Sell your home", path },
          ]}
        />
        <Hero
          eyebrow="Mesquite Estates sellers"
          title="Selling in Mesquite Estates While Builders Are Selling Too"
          lead={`Mesquite had ${m.activeListings} homes for sale in ${m.month}, up from ${m.activeYearAgo} a year earlier. Your buyers are also touring models with incentive money on the table.`}
          bookingLabel="Book a listing consultation"
          bookingUrl={BOOKING.seller}
        />
        <Prose
          paragraphs={[
            "Resale sellers in Mesquite Estates compete with two production and semi-custom builders inside the same master plan, both advertising incentives right now. Buyers will ask what you can match.",
            "You don't have to beat the builder on price. You have to beat them on what buyers actually want: a finished yard, a home they can move into this month and the right monthly payment.",
          ]}
        />
        <PriceTable
          title={`The market you're selling into (${m.month})`}
          rows={[
            { label: "Homes for sale in Mesquite", value: `${m.activeListings} (vs ${m.activeYearAgo})` },
            { label: "Supply", value: `${m.monthsSupply} months` },
            { label: "Median sale price", value: `${m.medianSale} (vs ${m.medianSaleYearAgo})` },
            { label: "Sale price vs. asking", value: m.saleToList },
            { label: "Typical days to sell", value: `${m.daysToSell}` },
          ]}
        />
        <Points
          title="How we price and position your home"
          points={[
            "Street-level comps, not city medians. Two Sierra Ridge homes on Wild Horse Lane closed $47,500 apart in 2026.",
            "A side-by-side with the nearest builder: their base price, lot premium and incentives against your finished home.",
            "A credit strategy that competes with builder incentives, such as a seller-paid rate buydown, quoted as a lower monthly payment.",
            "Three price points, each with the showing activity and time on market to expect.",
            "Pre-listing fixes that pay back in this price range, and the ones that don't.",
          ]}
        />
        <CtaBand
          title="What's your Mesquite Estates home worth today?"
          text="Book 30 minutes. Drop your address in the booking and I'll pull your neighborhood's sales before we talk."
          bookingLabel="Book a listing consultation"
          bookingUrl={BOOKING.seller}
        />
        <ServiceLinks exclude={path} />
        <SourcesNote sources={[m.source, ridgemont.sources[0], getNeighborhood("val-vista")!.sources[1], getNeighborhood("sierra-ridge")!.sources[0]]} />
      </PageFrame>
      <Footer />
    </>
  );
}
