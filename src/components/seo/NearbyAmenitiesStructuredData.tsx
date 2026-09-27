import { siteConfig } from '@/config/siteConfig';
import {
  amenitiesPageProductionUrl,
  communityMapConfig,
  curatedPlaces,
} from '@/config/amenityMapConfig';

const pageUrl = `${amenitiesPageProductionUrl}/nearby-amenities`;

const faqItems = [
  {
    question: 'What grocery stores are near Mesquite Estates?',
    answer:
      "Smith's Food and Drug on N Sandhill Blvd is the primary supermarket in Mesquite. Walmart Supercenter on W Pioneer Blvd also carries groceries.",
  },
  {
    question: 'How far is Mesquite from the Las Vegas Strip?',
    answer:
      'Mesquite is about 80 miles north of the Las Vegas Strip on Interstate 15 — roughly a one-hour drive under normal traffic (approximate).',
  },
  {
    question: 'Are there hospitals near Mesquite?',
    answer:
      'Mesa View Regional Hospital on Bertha Howe Ave in Mesquite provides hospital care for the Virgin River Valley.',
  },
  {
    question: 'What golf courses are near Mesquite homes?',
    answer:
      'Championship courses in Mesquite include Conestoga Golf Club, Wolf Creek Golf Club, and CasaBlanca Golf Club.',
  },
  {
    question: 'Is Mesquite close to Harry Reid International Airport?',
    answer:
      'Fly into Harry Reid International Airport in Las Vegas, then drive north on I-15 to Mesquite — about 80 miles (approximate one-hour drive).',
  },
  {
    question: 'What parks are in Mesquite?',
    answer:
      "Veteran's Memorial Park on Hillside Drive is a city park with a playground, pavilion, and restrooms.",
  },
  {
    question: 'Who helps buyers find homes near these Mesquite amenities?',
    answer:
      'Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties specializes in Mesquite Estates and golf community homes.',
  },
];

export default function NearbyAmenitiesStructuredData() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Nearby amenities in ${communityMapConfig.communityName}, Nevada`,
    itemListElement: curatedPlaces.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        url: place.sourceUrl,
        ...(place.address
          ? {
              address: {
                '@type': 'PostalAddress',
                streetAddress: place.address.split(',')[0]?.trim(),
                addressLocality: communityMapConfig.city,
                addressRegion: communityMapConfig.stateCode,
                addressCountry: 'US',
              },
            }
          : {}),
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: amenitiesPageProductionUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nearby Amenities',
        item: pageUrl,
      },
    ],
  };

  const communityPlaceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: communityMapConfig.brandName,
    description: siteConfig.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: communityMapConfig.center.lat,
      longitude: communityMapConfig.center.lng,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1155 W Pioneer Blvd Suite 104-D',
      addressLocality: communityMapConfig.city,
      addressRegion: communityMapConfig.stateCode,
      postalCode: '89027',
      addressCountry: 'US',
    },
  };

  const agentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    url: siteConfig.url,
    telephone: '+1-702-718-2228',
    email: 'DrDuffy@MesquiteEstates.com',
    image: `${siteConfig.url}/Image/hero_bg_1.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1155 W Pioneer Blvd Suite 104-D',
      addressLocality: communityMapConfig.city,
      addressRegion: communityMapConfig.stateCode,
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
        name: communityMapConfig.city,
        addressRegion: communityMapConfig.stateCode,
      },
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(communityPlaceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
      />
    </>
  );
}

export { faqItems };
