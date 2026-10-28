// Mesquite Estates content — one source of truth for the hub, neighborhood
// and service pages. Every figure was checked on DATA_AS_OF against the
// sources listed with it. Update the numbers and the date together.

export const DATA_AS_OF = "October 27, 2026";
export const SITE_PHONE = "702-718-2228";

export const BOOKING = {
  marketCall: "https://calendly.com/drjanduffy/15min",
  buyer: "https://calendly.com/drjanduffy/buyer-consultation-30-min",
  seller: "https://calendly.com/drjanduffy/listing-consultation",
  zoom: "https://calendly.com/drjanduffy/meet-on-zoom",
} as const;

export type Fact = { label: string; value: string };
export type Source = { label: string; url: string };

export type Neighborhood = {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  facts: Fact[];
  points: string[];
  priceHeading: string;
  prices: Fact[];
  bookingLabel: string;
  bookingUrl: string;
  sources: Source[];
};

export const masterPlan = {
  facts: [
    { label: "Location", value: "North of I-15, west of the Mesquite airport and Wolf Creek Golf Club" },
    { label: "Master association", value: "Formed 2011; about 2,100 units on file" },
    { label: "Typical home", value: "1,769 sq ft on a 7,405 sq ft lot" },
    { label: "Typical HOA", value: "$83/month (median)" },
    { label: "Age of homes", value: "173 of 215 recent homes built 2020 or later" },
    { label: "Busiest month", value: "July 2026: 18 closings, $551,000 median" },
  ] as Fact[],
  luxury: { sales: 36, overMillion: 16, median: "$920,000", window: "January 2024 – early October 2026" },
  otherAreas: ["Mesquite North", "The Orleans"],
  sources: [
    { label: "Mesquite Estates community report (Oct 2026)", url: "https://homesforsaleinmesquitenevada.com/nevada/mesquite/mesquite-estates" },
    { label: "Mesquite $700K+ sales by master plan (Oct 20, 2026)", url: "https://homesforsaleinmesquitenevada.com/news/mesquite-nv-luxury-golf-and-view-home-neighborhoods" },
    { label: "Mesquite Estates Master Association record", url: "https://lookuphoa.com/homeowner-association/mesquite-estates-master-association" },
    { label: "The Orleans at Mesquite Estates (57 lots)", url: "https://www.vivahomevegas.com/mesquite-estates_hoa_mesquite/homes" },
  ] as Source[],
};

export const mesquiteMarket = {
  month: "September 2026",
  activeListings: 324,
  activeYearAgo: 173,
  monthsSupply: "about 6",
  medianSale: "$379,000",
  medianSaleYearAgo: "$400,000",
  saleToList: "98%",
  daysToSell: 46,
  newBuildMedian: "$430,490",
  source: { label: "Mesquite market report, September 2026", url: "https://homesforsaleinmesquitenevada.com/nevada/mesquite/market-stats" } as Source,
  newBuildSource: { label: "Mesquite housing market guide 2026", url: "https://www.nevadarealestategroup.com/blog/mesquite-nevada-housing-market-guide-2026" } as Source,
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "gatherings-at-ridgemont",
    name: "Gatherings at Ridgemont",
    tagline: "Beazer's 55+ new-build neighborhood inside Mesquite Estates",
    metaTitle: "Gatherings at Ridgemont 55+ New Homes, Mesquite",
    metaDescription:
      "Gatherings at Ridgemont by Beazer Homes: 55+ single-story new builds in Mesquite Estates from $389,990, 1,551–2,191 sq ft, solar included. Get your own buyer's agent before you tour.",
    intro: [
      "Gatherings at Ridgemont is Beazer Homes' age-qualified 55+ neighborhood in Mesquite Estates. Every plan is single-story, and solar comes standard.",
      "Beazer is advertising incentives through November 30, 2026, and the terms differ between quick move-in homes and to-be-built homesites. Ask what applies to the exact homesite before you commit; how you use an incentive can matter more than the sticker price.",
    ],
    facts: [
      { label: "Builder", value: "Beazer Homes" },
      { label: "Community type", value: "55+ age-qualified, single-story" },
      { label: "Starting price", value: "$389,990" },
      { label: "Home sizes", value: "1,551–2,191 sq ft, 2–4 bedrooms" },
      { label: "HOA", value: "$107/month" },
      { label: "Sales office", value: "1486 Ridgemont Lane" },
    ],
    points: [
      "Solar is included on every home, which cuts summer power bills.",
      "Some plans offer a 3-car garage.",
      "Quick move-in homes and to-be-built homesites carry different incentives. Compare both before you pick.",
      "A community dog park is planned, and the builder notes easy I-15 access.",
    ],
    priceHeading: "Plans and starting prices",
    prices: [
      { label: "Spring · 1,551 sq ft", value: "from $420,990" },
      { label: "Willow · 1,769 sq ft", value: "from $430,990" },
      { label: "Summit · 2,011 sq ft", value: "from $455,990" },
      { label: "Zion · 2,191 sq ft", value: "from $465,990" },
    ],
    bookingLabel: "Book a new-build buyer consult",
    bookingUrl: BOOKING.buyer,
    sources: [
      { label: "Beazer Homes – Gatherings at Ridgemont", url: "https://www.beazer.com/las-vegas-NV/mesquite/gatherings-at-ridgemont" },
      { label: "Beazer – Spring plan", url: "https://www.beazer.com/las-vegas-NV/mesquite/gatherings-at-ridgemont/spring" },
      { label: "Gatherings at Ridgemont – Redfin (I-15 access, dog park)", url: "https://www.redfin.com/NV/Mesquite/Gatherings-at-Ridgemont/community/30434389" },
      { label: "Gatherings at Ridgemont MLS listing (HOA)", url: "https://www.mesquitenv-homes.com/listings/mesquite-estates-homes-for-sale/detail-1_10127618-596-Hamilton-Rd-Mesquite-NV-89027" },
    ],
  },
  {
    slug: "val-vista",
    name: "Val Vista",
    tagline: "Semi-custom new builds with valley views",
    metaTitle: "Val Vista New Homes, Mesquite Estates | From $382K",
    metaDescription:
      "Val Vista by Nevada Residential Construction: semi-custom new homes in Mesquite Estates from $382,000, 1,453–2,056 sq ft, $80 HOA.",
    intro: [
      "Val Vista is a semi-custom new-build neighborhood in Mesquite Estates from Nevada Residential Construction, a Southern Nevada builder since 1998.",
      "Builder sales here close at or near full list price, with almost no time on market. Your leverage is in the extras: this month's package adds a $5,000 front-yard landscaping allowance and appliance upgrades.",
    ],
    facts: [
      { label: "Builder", value: "Nevada Residential Construction" },
      { label: "Starting price", value: "$382,000" },
      { label: "Home sizes", value: "1,453–2,056 sq ft, 3 bedrooms" },
      { label: "Typical lot", value: "About 0.17 acre" },
      { label: "HOA", value: "$80/month" },
      { label: "Sales office", value: "1450 Mesquite Heights Road" },
    ],
    points: [
      "Phase 2 homesites carry different lot premiums. Check the premium map before you choose.",
      "October incentives: $5,000 front-yard landscaping allowance, appliance upgrades, under-cabinet lighting and a garage keypad.",
      "Semi-custom means you choose finishes before construction. Build those costs into your budget early.",
    ],
    priceHeading: "Recent Val Vista sales",
    prices: [
      { label: "May 2026 median", value: "$445,700" },
      { label: "July 2026 (8 sales) median", value: "$520,842" },
      { label: "September 2026 median", value: "$656,782" },
    ],
    bookingLabel: "Book a new-build buyer consult",
    bookingUrl: BOOKING.buyer,
    sources: [
      { label: "Val Vista – Redfin community page", url: "https://www.redfin.com/NV/Mesquite/Val-Vista/community/22060297" },
      { label: "Nevada Residential Construction – Val Vista incentives", url: "https://buildinmesquite.com/val-vista/" },
      { label: "Val Vista community report (Oct 2026)", url: "https://homesforsaleinmesquitenevada.com/nevada/mesquite/val-vista" },
    ],
  },
  {
    slug: "mohave-ridge",
    name: "Mohave Ridge",
    tagline: "19 view homesites high above Mesquite",
    metaTitle: "Mohave Ridge View Lots for Sale, Mesquite Estates",
    metaDescription:
      "Mohave Ridge in Mesquite Estates: a 19-home neighborhood of quarter-acre-plus view lots, listed $165,000–$280,000, $110 HOA. Lot-to-custom-home guidance.",
    intro: [
      "Mohave Ridge is a 19-home neighborhood set high on the north edge of Mesquite Estates. Its lots run from about a quarter acre to 0.40 acre, many facing the eastern mountains.",
      "Several lots are on the market now. Read the CC&Rs before you buy: some lots require construction to start within 6 months of closing.",
    ],
    facts: [
      { label: "Size", value: "19 homesites" },
      { label: "Lot sizes", value: "0.23–0.40 acre" },
      { label: "Lots listed", value: "$165,000–$280,000" },
      { label: "HOA", value: "$110/month" },
      { label: "Rules", value: "CC&Rs; some lots require a build start within 6 months" },
    ],
    points: [
      "Several lots back to the east with mountain views, and some sit on cul-de-sacs or corners.",
      "Each lot listing carries its own builder terms. Read them before you make an offer.",
      "A finished custom home on El Sueno Court, built in 2024, has 4,067 sq ft on 0.28 acre.",
    ],
    priceHeading: "Lots on the market",
    prices: [
      { label: "1660 Encanto Cove · 0.23 ac", value: "$165,000" },
      { label: "1670 Encanto Cove · 0.23 ac", value: "$170,000" },
      { label: "1680 Encanto Cove · 0.29 ac", value: "$180,000" },
      { label: "1658 El Sueno Ct · 0.25 ac", value: "$240,000" },
      { label: "1659 El Sueno Ct · 0.40 ac", value: "$280,000" },
      { label: "1679 El Sueno Ct · 0.29 ac (sale pending)", value: "$175,000" },
    ],
    bookingLabel: "Book a lot and custom-build consult",
    bookingUrl: BOOKING.buyer,
    sources: [
      { label: "Mohave Ridge lot listings", url: "https://www.mesquitenv-homes.com/listings/mesquite-estates-homes-for-sale.htm" },
      { label: "1670 Encanto Cove (build-start rule)", url: "https://www.mesquitenv-homes.com/listings/mesquite-estates-homes-for-sale/detail-1_10113193-1670-Encanto-Cove-Mesquite-NV-89027" },
      { label: "1668 El Sueno – custom home", url: "https://www.premierpropertiesmesquite.com/featured-1-single-family/detail-1_10097753-1668-El-Sueno-Mesquite-NV-89027" },
    ],
  },
  {
    slug: "bella-horizon",
    name: "Bella Horizon",
    tagline: "Gated custom homes on larger lots",
    metaTitle: "Bella Horizon Gated Custom Homes, Mesquite NV",
    metaDescription:
      "Bella Horizon in Mesquite Estates: gated custom homes built 2014–2026, median 2,693 sq ft on about 0.27 acre. Active listings $879,000–$1,399,900. HOA $102.",
    intro: [
      "Bella Horizon is a gated neighborhood of custom homes in Mesquite Estates, built from 2014 through 2026. Homes run larger here, with a median of 2,693 sq ft on about a quarter acre.",
      "Since 2024, 8 Bella Horizon homes sold for $700,000 or more, at a median of $906,095. Recent days on market have ranged from 10 to 221.",
    ],
    facts: [
      { label: "Access", value: "Gated" },
      { label: "Built", value: "2014–2026, custom" },
      { label: "Typical home", value: "2,693 sq ft on about 0.27 acre" },
      { label: "HOA", value: "$102/month" },
      { label: "Active listings", value: "$879,000–$1,399,900 (Oct 2026)" },
    ],
    points: [
      "Bella Horizon had more active $700K+ listings than any other Mesquite subdivision on October 12, 2026.",
      "Vacant lots rarely come up. Three sold since 2024 at a median of $170,000.",
      "Streets include Pomegranate Trail, Sanctuary Ridge and Seven Palms Way.",
    ],
    priceHeading: "Recent closed sales",
    prices: [
      { label: "February 2026", value: "$700,000" },
      { label: "April 2026", value: "$1,207,000" },
      { label: "May 2026", value: "$1,480,000" },
      { label: "Median $700K+ sale since 2024", value: "$906,095" },
    ],
    bookingLabel: "Book a private consult",
    bookingUrl: BOOKING.buyer,
    sources: [
      { label: "Bella Horizon community report (Oct 2026)", url: "https://homesforsaleinmesquitenevada.com/nevada/mesquite/bella-horizon" },
      { label: "Mesquite $700K+ sales by subdivision (Oct 20, 2026)", url: "https://homesforsaleinmesquitenevada.com/news/mesquite-nv-luxury-golf-and-view-home-neighborhoods" },
      { label: "Bella Horizon listings (2014 and 2026 builds, street names)", url: "https://www.lovemesquite.com/neighborhood/bella-horizon.htm" },
    ],
  },
  {
    slug: "royal-vista",
    name: "Royal Vista",
    tagline: "A small gated enclave of 2010s-built homes",
    metaTitle: "Royal Vista Gated Homes for Sale, Mesquite NV",
    metaDescription:
      "Royal Vista in Mesquite Estates: a small gated enclave of 2010s-built homes, 1,900–2,200 sq ft on 0.16-acre lots, HOA about $120. 2026 sales $540,000–$619,000.",
    intro: [
      "Royal Vista is a small gated enclave of fewer than 20 homes in Mesquite Estates, most built between 2010 and 2019. Plans run about 1,900 to 2,200 sq ft, usually 3 bedrooms with a 2-car garage.",
      "With so few homes, only a handful sell each year. When one lists, it helps to already know the last three sale prices.",
    ],
    facts: [
      { label: "Size", value: "Fewer than 20 homes" },
      { label: "Access", value: "Gated" },
      { label: "Built", value: "Mostly 2010–2019" },
      { label: "Typical home", value: "1,924 sq ft on 0.16 acre" },
      { label: "HOA", value: "About $120/month" },
    ],
    points: [
      "Per a 2026 listing, HOA dues cover common areas, road upkeep and front-yard maintenance.",
      "With only 10 listings in the past year, a single sale can move the median a lot.",
    ],
    priceHeading: "Recent closed sales",
    prices: [
      { label: "December 2025", value: "$690,000" },
      { label: "February 2026", value: "$540,000" },
      { label: "May 2026", value: "$590,000" },
      { label: "July 2026", value: "$619,000" },
    ],
    bookingLabel: "Book a buyer consult",
    bookingUrl: BOOKING.buyer,
    sources: [
      { label: "Royal Vista community report (Oct 2026)", url: "https://homesforsaleinmesquitenevada.com/nevada/mesquite/royal-vista" },
      { label: "Royal Vista HOA record", url: "https://nv-hoa.com/nvhoa_list.php?masterkey1=E0403692011-5&mastertable=nvtitle" },
      { label: "1534 Royal Vista Ln listing (HOA services)", url: "https://www.zillow.com/homedetails/1534-Royal-Vista-Ln-Mesquite-NV-89027/141052529_zpid" },
    ],
  },
  {
    slug: "sierra-ridge",
    name: "Sierra Ridge",
    tagline: "A 38-home HOA neighborhood with recent sales in the $400s",
    metaTitle: "Sierra Ridge Homes for Sale | Mesquite Estates",
    metaDescription:
      "Sierra Ridge at Mesquite Estates: a 38-home HOA neighborhood. Two 2026 sales on Wild Horse Lane closed at $400,000 and $447,500.",
    intro: [
      "Sierra Ridge is a 38-home neighborhood in Mesquite Estates with its own HOA. Recent sales have been in the $400s.",
      "Two Wild Horse Lane homes closed in 2026 at $400,000 and $447,500. Same street, $47,500 apart: that's why street-level comps matter.",
    ],
    facts: [
      { label: "Size", value: "38 homes" },
      { label: "Example home", value: "3 bed, 2 bath, 1,834 sq ft" },
      { label: "HOA", value: "Sierra Ridge sub-association plus the master HOA" },
    ],
    points: [
      "Before you offer or list, compare the exact homes that sold, not the city-wide median.",
    ],
    priceHeading: "Recent closed sales",
    prices: [
      { label: "460 Wild Horse Ln · 1,834 sq ft", value: "$400,000" },
      { label: "456 Wild Horse Ln · 1,768 sq ft", value: "$447,500" },
    ],
    bookingLabel: "Book a buyer consult",
    bookingUrl: BOOKING.buyer,
    sources: [
      { label: "Sierra Ridge (Parcel 13, Mesquite Estate) sold homes", url: "https://www.seevegashomes.com/summerlin/sierra-ridge/" },
      { label: "Sierra Ridge HOA record (38 units)", url: "https://www.communitypay.us/directory/nevada/mesquite/sierra-ridge-at-mesquite-estate-homeowners-association" },
    ],
  },
];

// Page <title>: skip the site-wide template, which repeats "Mesquite Estates".
export function pageTitle(t: string) {
  return { absolute: `${t} | Dr. Jan Duffy` };
}

export function getNeighborhood(slug: string) {
  return neighborhoods.find((n) => n.slug === slug);
}
