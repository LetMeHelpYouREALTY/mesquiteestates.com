import { siteConfig } from '@/config/siteConfig';
import { communityMapConfig } from '@/config/amenityMapConfig';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/Image/hero_bg_1.jpg`,
    logo: `${siteConfig.url}/Image/hero_bg_1.jpg`,
    telephone: ['+1-702-718-2228', '+1-702-500-1955'],
    email: 'DrDuffy@MesquiteEstates.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1155 W Pioneer Blvd Suite 104-D',
      addressLocality: 'Mesquite',
      addressRegion: 'NV',
      postalCode: '89027',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'Place',
        name: communityMapConfig.brandName,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: communityMapConfig.center.lat,
          longitude: communityMapConfig.center.lng,
        },
      },
      {
        '@type': 'City',
        name: 'Mesquite',
        addressRegion: 'NV',
      },
    ],
    priceRange: '$70,000-$700,000',
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/Property?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

