import type { Metadata } from "next";
import { IMAGES, type SiteImage } from "@/data/mesquiteEstates";

const SITE = "https://www.mesquiteestates.com";
const SITE_NAME = "Mesquite Estates Homes by Dr. Jan Duffy";

/**
 * Per-page social share tags (Open Graph + X/Twitter) and canonical.
 * Next.js does not derive og:title / og:description from a page's title, so each page sets its own.
 */
/** 1200x630 branded share card for the home page (public/og). */
export const HOME_CARD: SiteImage & { width: number; height: number } = {
  src: `${SITE}/og/mesquite-estates-homes-for-sale.jpg`,
  alt: "Mesquite Estates Homes for Sale: $920K median of 36 sales at $700K+ since Jan 2024. Dr. Jan Duffy, REALTOR®",
  width: 1200,
  height: 630,
};

export function ogFor(
  title: string,
  description: string,
  path: string,
  image: SiteImage & { width?: number; height?: number } = IMAGES.hero,
): Metadata {
  const url = `${SITE}${path === "/" ? "" : path}`;
  const w = image.width ?? 1024;
  const h = image.height ?? 1024;
  return {
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url,
      title,
      description,
      images: [{ url: image.src, width: w, height: h, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.src],
    },
  };
}
