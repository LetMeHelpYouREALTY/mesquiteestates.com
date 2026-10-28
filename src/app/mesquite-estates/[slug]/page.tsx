import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  Points,
  PriceTable,
  Prose,
  ServiceLinks,
  SourcesNote,
} from "@/components/mesquite-estates/blocks";
import { getNeighborhood, neighborhoods, pageTitle } from "@/data/mesquiteEstates";

export const dynamicParams = false;

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = getNeighborhood(slug);
  if (!n) return {};
  const path = `/mesquite-estates/${n.slug}`;
  return {
    title: pageTitle(n.metaTitle),
    description: n.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: n.metaTitle, description: n.metaDescription, url: path },
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const n = getNeighborhood(slug);
  if (!n) notFound();

  return (
    <>
      <Navbar />
      <PageFrame>
        <Breadcrumbs
          trail={[
            { name: "Mesquite Estates", path: "/mesquite-estates" },
            { name: n.name, path: `/mesquite-estates/${n.slug}` },
          ]}
        />
        <Hero
          eyebrow="Mesquite Estates · Mesquite, NV 89027"
          title={`${n.name} Homes in Mesquite Estates`}
          lead={n.tagline}
          bookingLabel={n.bookingLabel}
          bookingUrl={n.bookingUrl}
        />
        <Prose paragraphs={n.intro} />
        <FactGrid title={`${n.name} at a glance`} facts={n.facts} />
        <PriceTable title={n.priceHeading} rows={n.prices} />
        <Points title={`What to know before you buy in ${n.name}`} points={n.points} />
        <Listings title="Current Mesquite listings" />
        <CtaBand
          title={`Thinking about ${n.name}?`}
          text="Get this neighborhood's latest sales and what similar homes are going for, before you tour or make an offer."
          bookingLabel={n.bookingLabel}
          bookingUrl={n.bookingUrl}
        />
        <ServiceLinks />
        <NeighborhoodLinks exclude={n.slug} />
        <SourcesNote sources={n.sources} />
      </PageFrame>
      <Footer />
    </>
  );
}
