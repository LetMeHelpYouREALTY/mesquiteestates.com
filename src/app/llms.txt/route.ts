import { ENCLAVES, FIFTY_FIVE } from '@/data/mesquiteEstates';

export const dynamic = 'force-static';

export async function GET() {
  const b = 'https://www.mesquiteestates.com';
  const neighborhoods = ENCLAVES.map((e) => `- [${e.name}](${b}/mesquite-estates/${e.slug}): ${e.tagline}`).join('\n');
  const fiftyFive = FIFTY_FIVE.map((c) => `- ${c.name}: ${c.price}; HOA ${c.hoa}; ${c.gated ? 'gated' : 'not gated'}`).join('\n');

  const content = `# Mesquite Estates — Dr. Jan Duffy, REALTOR®
> Homes, land and 55+ communities in Mesquite, Nevada (Clark County, ZIP 89027/89034), about 80 miles northeast of Las Vegas on I-15.

## About
Dr. Jan Duffy is a Nevada-licensed REALTOR® (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties, licensed since 2008 with 35 years in Las Vegas. This site covers the Mesquite Estates master plan north of I-15 and Mesquite's 55+ communities.

## Mesquite Estates at a glance (MLS data, Jan 2024 – Oct 2026)
- 36 sales at $700,000+ at a $920,000 median; 16 sold for $1M+
- Elevated view lots north of I-15; none of the $700K+ sales was on a golf course
- All ages; one section (Gatherings at Ridgemont) is 55+
- Typical master HOA about $83/month plus neighborhood dues

## Neighborhoods
${neighborhoods}

## 55+ communities in Mesquite
${fiftyFive}
Full comparison: ${b}/55-plus-communities-mesquite

## Key pages
- [Homes for sale](${b}/mesquite-estates/homes-for-sale)
- [Neighborhoods compared](${b}/mesquite-estates/neighborhoods)
- [Land to build on](${b}/mesquite-estates/custom-home-lots)
- [Market report](${b}/mesquite-estates/market-report)
- [55+ communities](${b}/55-plus-communities-mesquite)
- [Sun City Mesquite](${b}/Sun_City_Mesquite)
- [Sell your Mesquite home](${b}/sell-your-mesquite-home)
- [About](${b}/About)
- [Contact](${b}/Contact_us)

## Contact
- Call/Text: 702-718-2228
- Email: DrDuffy@MesquiteEstates.com
- Brokerage: Berkshire Hathaway HomeServices Nevada Properties

Figures on this site carry dated sources; verify current numbers for any specific home.
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
