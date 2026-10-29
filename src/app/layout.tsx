import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import AccessibilityWidget from "@/components/common/AccessibilityWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
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
        url: '/Image/hero_bg_1.jpg',
        width: 1200,
        height: 630,
        alt: 'Mesquite Estates - Homes by Dr. Jan Duffy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/Image/hero_bg_1.jpg'],
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
              --rs-ss-searchbar-border-color: #8b572a;
              --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
              --rs-ss-widget-width: 500px !important;
            }
            realscout-office-listings {
              --rs-listing-divider-color: #0e64c8;
              width: 100%;
            }
            realscout-advanced-search {
              --rs-as-button-text-color: #ffffff;
              --rs-as-background-color: #000000;
              --rs-as-button-color: #8b572a;
              --rs-as-widget-width: 500px !important;
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
      <body className={inter.className}>
        {children}
        <AccessibilityWidget />
        <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module" async></script>
      </body>
    </html>
  );
}
