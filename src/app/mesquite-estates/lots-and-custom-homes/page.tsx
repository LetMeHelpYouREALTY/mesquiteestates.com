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
import { BOOKING, getNeighborhood, pageTitle } from "@/data/mesquiteEstates";

const path = "/mesquite-estates/lots-and-custom-homes";
const title = "Mesquite Estates Lots & Custom Homes";
const description =
  "Buying a lot in Mesquite Estates? Mohave Ridge view lots are listed at $165,000–$280,000, and Bella Horizon lots have sold for a $170,000 median. Learn the build-start rules, CC&Rs and next steps.";

export const metadata: Metadata = {
  title: pageTitle(title),
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function LotsAndCustomHomes() {
  const mohave = getNeighborhood("mohave-ridge")!;
  const bella = getNeighborhood("bella-horizon")!;

  return (
    <>
      <Navbar />
      <PageFrame>
        <Breadcrumbs
          trail={[
            { name: "Mesquite Estates", path: "/mesquite-estates" },
            { name: "Lots and custom homes", path },
          ]}
        />
        <Hero
          eyebrow="Mesquite Estates homesites"
          title="Lots and Custom Homes in Mesquite Estates"
          lead="From a view lot to a finished custom home, with the CC&Rs, deadlines and builder terms checked before you commit."
          bookingLabel="Book a lot and custom-build consult"
          bookingUrl={BOOKING.buyer}
        />
        <Prose
          paragraphs={[
            "Mohave Ridge, a 19-home neighborhood high on the north edge, has several view lots listed right now. In gated Bella Horizon, only three lots have sold since 2024.",
            "The lot price is only the start. The CC&Rs and listing terms can set how soon you must build and who can build it. Read them before you write an offer, not after.",
          ]}
        />
        <PriceTable
          title="Lot prices right now"
          rows={[
            { label: "Mohave Ridge lots listed (0.23–0.40 acre)", value: "$165,000–$280,000" },
            { label: "Mohave Ridge HOA", value: "$110/month" },
            { label: "Bella Horizon lot sales since 2024 (median of 3)", value: "$170,000" },
            { label: "Finished Mohave Ridge custom home, built 2024", value: "4,067 sq ft" },
          ]}
        />
        <Points
          title="The lot-to-home path, step by step"
          points={[
            "Read the CC&Rs and the listing's builder terms first. Some Mohave Ridge lots require construction to start within 6 months of closing.",
            "Confirm what's at the lot line: curb and gutter, utilities and grade. Site work on a sloped view lot can add real cost.",
            "Line up your builder and plans before closing so a build-start deadline doesn't catch you.",
            "Plan the financing early. A lot loan and a construction loan are different products, and not every lender offers both.",
            "If the HOA requires design approval, get it before you finalize plans.",
          ]}
        />
        <CtaBand
          title="Looking at a lot from out of town?"
          text="Book a Zoom call and we'll walk the listing, the CC&Rs and nearby sales together on screen."
          bookingLabel="Book a Zoom walkthrough"
          bookingUrl={BOOKING.zoom}
        />
        <ServiceLinks exclude={path} />
        <SourcesNote sources={[...mohave.sources, bella.sources[1]]} />
      </PageFrame>
      <Footer />
    </>
  );
}
