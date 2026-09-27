import type { Metadata } from "next";
import Header from "@/components/ui/home/Header";
import Properties from "@/components/ui/home/Properties"
import QuickPriceSearch from "@/components/ui/home/QuickPriceSearch";
import CommunitiesPreview from "@/components/ui/home/CommunitiesPreview";
import Choose_us from "@/components/ui/home/Choose_us";
import Reviews from "@/components/ui/home/Reviews";
import Agents from "@/components/ui/home/Agents";
import HomeFAQ from "@/components/ui/home/HomeFAQ";
import Footer from "@/components/common/Footer";
import FloatingCTA from "@/components/common/FloatingCTA";
import Newsletter from "@/components/common/Newsletter";
import StructuredData from "@/components/seo/StructuredData";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <Properties />
      <QuickPriceSearch />
      <CommunitiesPreview />
      <Agents />
      <Choose_us />
      <Reviews />
      <HomeFAQ />
      <Newsletter />
      <FloatingCTA />
      <Footer />
    </>
  );
}
