import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import AccessibilityWidget from "@/components/common/AccessibilityWidget";
import RealtorAnalytics from "../components/analytics/RealtorAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    // Self-referencing canonical on every route (resolved against metadataBase)
    canonical: './',
  },
  keywords: [
    'Mesquite Nevada homes',
    'Mesquite real estate',
    'Dr. Jan Duffy',
    'Mesquite Estates',
    'golf homes Mesquite',
    'Mesquite homes for sale',
    'BHHS Nevada Properties',
    'Mesquite realtor',
    'real estate Mesquite Nevada',
    'custom lots Mesquite',
    'Mesquite golf courses',
  ],
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'BHHS Nevada Properties',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: 'https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw/hero-mesquite-estates-view-home.jpg',
        width: 1024,
        height: 1024,
        alt: 'Desert contemporary view home above the Mesquite, Nevada valley at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw/hero-mesquite-estates-view-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-simple-search {
              --rs-ss-font-primary-color: #000000;
              --rs-ss-searchbar-border-color: #9A5A34;
              --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
              --rs-ss-widget-width: min(500px, calc(100vw - 32px)) !important;
              max-width: 100%;
            }
            realscout-office-listings {
              --rs-listing-divider-color: #0e64c8;
              width: 100%;
            }
            realscout-advanced-search {
              --rs-as-button-text-color: #ffffff;
              --rs-as-background-color: #16120F;
              --rs-as-button-color: #9A5A34;
              --rs-as-widget-width: min(500px, calc(100vw - 32px)) !important;
              max-width: 100%;
            }
            realscout-home-value {
              --rs-hvw-background-color: #ffffff;
              --rs-hvw-title-color: #000000;
              --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
              --rs-hvw-primary-button-text-color: #ffffff;
              --rs-hvw-primary-button-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
            }
          `
        }} />
      </head>
      <body className={`${inter.className} ${inter.variable} ${display.variable}`}>
        {children}
        <AccessibilityWidget />
        <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module" async></script>
        <RealtorAnalytics siteName="mesquiteestates.com" />
      </body>
    </html>
  );
}
