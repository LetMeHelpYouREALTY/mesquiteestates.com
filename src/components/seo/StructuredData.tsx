import { siteConfig } from '@/config/siteConfig';
import { IMAGES, ENCLAVES } from '@/data/mesquiteEstates';

/** Site-wide entity schema for the home page. FAQPage schema is emitted by <FaqBlock>. */
export default function StructuredData() {
  const agent = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteConfig.url}/#agent`,
    name: 'Dr. Jan Duffy',
    description: siteConfig.description,
    url: siteConfig.url,
    image: IMAGES.hero.src,
    telephone: '+1-702-718-2228',
    email: 'DrDuffy@MesquiteEstates.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1155 W Pioneer Blvd Suite 104-D',
      addressLocality: 'Mesquite',
      addressRegion: 'NV',
      postalCode: '89027',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      { '@type': 'Place', name: 'Mesquite Estates, Mesquite, NV 89027' },
      { '@type': 'Place', name: 'Sun City Mesquite, Mesquite, NV 89034' },
      { '@type': 'City', name: 'Mesquite', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    ],
    knowsAbout: [
      'Mesquite Estates',
      ...ENCLAVES.map((e) => e.name),
      'Custom home lots in Mesquite, Nevada',
      'View homes north of I-15 in Mesquite',
    ],
    priceRange: '$165,000-$1,500,000',
    memberOf: { '@type': 'Organization', name: 'Berkshire Hathaway HomeServices Nevada Properties' },
    hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Nevada Real Estate License S.0197614.LLC' },
  };

  const place = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${siteConfig.url}/#mesquite-estates`,
    name: 'Mesquite Estates',
    description: 'All-ages master-planned community on elevated ground north of I-15 in Mesquite, Nevada, with view lots and custom-home enclaves.',
    geo: { '@type': 'GeoCoordinates', latitude: 36.838311, longitude: -114.066228 },
    address: { '@type': 'PostalAddress', addressLocality: 'Mesquite', addressRegion: 'NV', postalCode: '89027', addressCountry: 'US' },
    containsPlace: ENCLAVES.map((e) => ({ '@type': 'Place', name: e.name, url: `${siteConfig.url}/mesquite-estates/${e.slug}` })),
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}/#agent` },
  };

  return (
    <>
      {[agent, place, website].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  );
}
