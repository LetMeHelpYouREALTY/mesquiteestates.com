import type { Metadata } from "next";
import { IMAGES, type SiteImage } from "@/data/mesquiteEstates";

const SITE = "https://www.mesquiteestates.com";
const SITE_NAME = "Mesquite Estates | Homes by Dr. Jan Duffy";

/**
 * Per-page social share tags (Open Graph + X/Twitter) and canonical.
 * Next.js does not derive og:title / og:description from a page's title, so each page sets its own.
 */
export function ogFor(title: string, description: string, path: string, image: SiteImage = IMAGES.hero): Metadata {
  const url = `${SITE}${path === "/" ? "" : path}`;
  return {
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url,
      title,
      description,
      images: [{ url: image.src, width: 1024, height: 1024, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.src],
    },
  };
}
