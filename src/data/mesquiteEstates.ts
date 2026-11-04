/**
 * Mesquite Estates neighborhood data.
 * Every figure carries an "asOf" date and a source in SOURCES below.
 * Refresh monthly from Mesquite MLS / CloudCMA before trusting these numbers.
 */

export const IMG_BASE = "https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw";

export type SiteImage = { src: string; alt: string; position?: string };

const img = (key: string, alt: string, position?: string): SiteImage => ({
  src: `${IMG_BASE}/${key}.jpg`,
  alt,
  position,
});

/** Illustrative photography (not photos of specific listings). Stored in Cloudflare R2. */
export const IMAGES = {
  hero: img("hero-mesquite-estates-view-home", "Desert contemporary view home on an elevated lot above the Mesquite, Nevada valley at sunset", "center 65%"),
  poolTerrace: img("mesquite-estates-pool-terrace-mountain-view", "Pool and spa terrace with a valley and mountain view at sunset in Mesquite, NV"),
  mohaveRidge: img("mohave-ridge-custom-home-open-desert", "New custom desert home with a three-car garage backing to open desert north of I-15"),
  bellaHorizon: img("bella-horizon-gated-home-fairway-view", "Elevated patio view over golf fairways and red mesas in Mesquite, Nevada"),
  cambria: img("cambria-single-story-home-street", "Single-story stucco home with a three-car garage on a curving Mesquite street"),
  ridgemont: img("ridgemont-single-story-home-sunset-view", "Single-story home with a covered patio and panoramic mountain view at sunset"),
  cityLights: img("mesquite-valley-city-lights-evening", "Hillside terrace fire pit overlooking Mesquite city lights at twilight"),
  lot: img("custom-home-lot-mountain-view", "Graded custom home lot on a cul-de-sac with a mountain view in Mesquite, NV"),
  greatRoom: img("luxury-great-room-valley-view", "Vaulted great room with glass walls framing a desert mountain view"),
  kitchen: img("gourmet-kitchen-quartz-island", "Gourmet kitchen with a quartz island and mountain-view windows"),
  garage: img("rv-garage-casita-desert-home", "Desert home with an oversized garage and wide paver driveway"),
  golf: img("golf-fairway-red-mesas-mesquite", "Mesquite golf fairway and green framed by red flat-top mesas"),
  river: img("virgin-river-valley-sunset", "Virgin River winding through the valley near Mesquite at sunset"),
  townAerial: img("mesquite-nevada-town-aerial-dusk", "Aerial view of Mesquite, Nevada with I-15, golf greens and red mesas at dusk"),
  clubhouse: img("active-adult-clubhouse-pool", "Resort-style community pool and clubhouse in Mesquite, Nevada"),
  golfBackyard: img("golf-course-home-backyard", "Covered patio of a single-story home opening onto a golf fairway"),
  keys: img("closing-keys-contract-desk", "House keys on a leather folder beside a pen at closing"),
  entry: img("desert-home-front-entry-twilight", "Glass pivot front door and stone wall of a desert home at twilight", "right center"),
} as const;

export const SOURCES = {
  luxury: {
    label: "MLS sales Jan 2024 – early Oct 2026, compiled Oct 20, 2026",
    url: "https://homesforsaleinmesquitenevada.com/news/mesquite-nv-luxury-golf-and-view-home-neighborhoods",
  },
  community: {
    label: "Mesquite Estates community data, accessed Nov 4, 2026",
    url: "https://homesforsaleinmesquitenevada.com/nevada/mesquite/mesquite-estates",
  },
  sept2026: {
    label: "Mesquite MLS market report, September 2026 (updated Oct 14, 2026)",
    url: "https://homesforsaleinmesquitenevada.com/nevada/mesquite/market-stats",
  },
  cityMarket: {
    label: "Mesquite single-family data, MLS updated Nov 3, 2026",
    url: "https://homesforsaleinmesquitenevada.com/nevada/mesquite/single-family-homes",
  },
  mohaveLot: {
    label: "Mohave Ridge lot listing remarks, Mesquite MLS #1127215 (refreshed Oct 27, 2026)",
    url: "https://www.mesquitenv-homes.com/listings/mesquite-estates-homes-for-sale/detail-1_10113191-1681-Encanto-Cove-Mesquite-NV-89027",
  },
  ridgemont: {
    label: "Gatherings at Ridgemont listing data, Mesquite MLS (refreshed Oct 26, 2026)",
    url: "https://www.mesquitenv-homes.com/listings/mesquite-estates-homes-for-sale/detail-1_10135546-1470-Barrett-Ln-Mesquite-NV-89027",
  },
  royalVista: {
    label: "Mesquite Estates HOA sold homes (GLVAR MLS), accessed Nov 4, 2026",
    url: "https://www.vivahomevegas.com/mesquite-estates_hoa_mesquite/homes-sold",
  },
  visit: {
    label: "Visit Mesquite FAQs",
    url: "https://www.visitmesquite.com/faqs",
  },
} as const;

export type SourceKey = keyof typeof SOURCES;

export type Stat = { value: string; label: string; source: SourceKey };

export const HEADLINE_STATS: Stat[] = [
  { value: "$920K", label: "Median price of Mesquite Estates sales at $700K+ (36 sales, Jan 2024–Oct 2026)", source: "luxury" },
  { value: "16", label: "Mesquite Estates sales at $1M or more since Jan 2024 — second only to Falcon Ridge", source: "luxury" },
  { value: "$606K", label: "Median of 4 Mesquite Estates closings in September 2026, in a median 29 days", source: "sept2026" },
  { value: "$83/mo", label: "Typical HOA fee; some neighborhoods add a small extra fee", source: "community" },
];

export type Enclave = {
  slug: string;
  name: string;
  tagline: string;
  image: SiteImage;
  summary: string;
  facts: { label: string; value: string; source: SourceKey }[];
  sections: { h2: string; body: string; h3s?: { h3: string; body: string }[] }[];
  faqs: { question: string; answer: string }[];
  ageRestricted?: boolean;
};

export const ENCLAVES: Enclave[] = [
  {
    slug: "mohave-ridge",
    name: "Mohave Ridge",
    tagline: "New custom homes at the north edge of Mesquite Estates",
    image: IMAGES.mohaveRidge,
    summary:
      "Mohave Ridge is a 19-home custom neighborhood north of I-15, backing to open desert near the Lincoln County line. It has the highest prices of any Mesquite Estates neighborhood in recent sales: about $1.39 million across 10 sales since 2024.",
    facts: [
      { label: "Median price, $700K+ sales", value: "≈ $1.39M (10 sales)", source: "luxury" },
      { label: "Median lot", value: "0.43 acre", source: "luxury" },
      { label: "Built", value: "2024–2026", source: "luxury" },
      { label: "Private pools", value: "9 of 10 sales", source: "luxury" },
      { label: "RV parking noted", value: "8 of 10 sales", source: "luxury" },
      { label: "Lot listings (Oct 2026)", value: "$165K–$205K, 0.23–0.29 acre", source: "mohaveLot" },
    ],
    sections: [
      {
        h2: "What You Get at Mohave Ridge",
        body:
          "Homes sit high above the valley with mountain views and direct access to desert trails. Construction listed by View Point Contractors notes 2×6 exterior walls, R-50 attic insulation, paver exteriors and epoxy garage floors.",
      },
      {
        h2: "Mohave Ridge Building Rules Buyers Should Know",
        body: "Lot listings spell out the building rules. Confirm each one in the HOA rules before you make an offer.",
        h3s: [
          { h3: "Minimum Home Size", body: "2,300 sq ft on lots along the edge and 2,100 sq ft on inside lots, per the lot listings." },
          { h3: "Garage Requirement", body: "Every home must include at least a three-car garage." },
          { h3: "Build Timeline", body: "Building must start within 6 months of buying the lot. Have your plans and builder quotes ready first." },
        ],
      },
    ],
    faqs: [
      { question: "How much do Mohave Ridge homes sell for?", answer: "Mohave Ridge homes sold at a median of about $1.39 million across 10 sales from 2024 to early October 2026." },
      { question: "Can I buy a lot and build in Mohave Ridge?", answer: "Yes. In October 2026, quarter- to third-acre lots were listed from $165,000 to $205,000. The listing remarks require construction to start within 6 months of closing." },
    ],
  },
  {
    slug: "bella-horizon",
    name: "Bella Horizon",
    tagline: "Gated custom homes on elevated lots above Wolf Creek",
    image: IMAGES.bellaHorizon,
    summary:
      "Bella Horizon is a gated subdivision of custom homes built from 2016 to 2025. Several listings describe views over Wolf Creek Golf Club's fairways from elevated lots. Its 8 sales at $700K+ since 2024 had a median of $906,095.",
    facts: [
      { label: "Median price, $700K+ sales", value: "$906,095 (8 sales)", source: "luxury" },
      { label: "Built", value: "2016–2025", source: "luxury" },
      { label: "Access", value: "Gated", source: "luxury" },
      { label: "Lot sales since 2024", value: "3, median $170,000", source: "luxury" },
      { label: "Active $700K+ listings, Oct 12, 2026", value: "5 — the most of any Mesquite subdivision", source: "luxury" },
    ],
    sections: [
      {
        h2: "Why Buyers Choose Bella Horizon",
        body:
          "You get golf-course views without fairway frontage, plus a gate and custom architecture. On October 12, 2026, Bella Horizon had more active $700K+ listings than any other subdivision in Mesquite.",
      },
      {
        h2: "Checks Before You Buy a View Lot",
        body: "In Mesquite, view premiums are real, but views are rarely protected.",
        h3s: [
          { h3: "Empty Lots in Front of You", body: "Walk the empty lots between you and the view, and check the HOA height limits." },
          { h3: "Golf Course Ownership", body: "Wolf Creek is a separate business from the HOA. Ask who owns it and whether any renovations are scheduled." },
        ],
      },
    ],
    faqs: [
      { question: "Is Bella Horizon gated?", answer: "Yes. Bella Horizon is a gated subdivision of custom homes built from 2016 to 2025 within Mesquite Estates." },
      { question: "Do Bella Horizon homes have golf course views?", answer: "Several listings describe views over Wolf Creek Golf Club's fairways from elevated lots. None of Mesquite Estates' 36 sales over $700K was listed as on a golf course." },
    ],
  },
  {
    slug: "cambria",
    name: "Cambria",
    tagline: "Newer single-story homes with a low HOA fee",
    image: IMAGES.cambria,
    summary:
      "Cambria homes were built from 2021 to 2024. Its 13 sales at $700K+ since 2024 had a median of $780,000, with a median listed HOA fee of $80 a month.",
    facts: [
      { label: "Median price, $700K+ sales", value: "$780,000 (13 sales)", source: "luxury" },
      { label: "Built", value: "2021–2024", source: "luxury" },
      { label: "Median HOA fee", value: "$80/month", source: "luxury" },
    ],
    sections: [
      {
        h2: "Cambria at a Glance",
        body:
          "Cambria has the most sales of Mesquite Estates' higher-priced neighborhoods. It suits buyers who want newer construction without managing a custom build.",
      },
      {
        h2: "How Cambria Pricing Compares",
        body:
          "At a $780,000 median for $700K+ sales, Cambria sits below Bella Horizon ($906,095) and Mohave Ridge (about $1.39M). Smaller Cambria homes also trade below that band, so ask what your exact floor plan has sold for.",
      },
    ],
    faqs: [
      { question: "What is the HOA fee in Cambria?", answer: "Cambria's median listed HOA fee is $80 a month, based on listings through early October 2026. The community-wide HOA fee may be billed separately." },
    ],
  },
  {
    slug: "gatherings-at-ridgemont",
    name: "Gatherings at Ridgemont",
    tagline: "Beazer's 55+ section at one of Mesquite's highest elevations",
    image: IMAGES.ridgemont,
    ageRestricted: true,
    summary:
      "Gatherings at Ridgemont is a 55+ age-restricted Beazer Homes section of Mesquite Estates, north of I-15. Recent listings run 1,340 to 1,552 sq ft on 0.16-acre lots with a $107 monthly HOA fee.",
    facts: [
      { label: "Builder", value: "Beazer Homes", source: "ridgemont" },
      { label: "HOA fee", value: "$107/month", source: "ridgemont" },
      { label: "Lot size", value: "0.16 acre", source: "ridgemont" },
      { label: "Example list price", value: "$475,900 · 1,552 sq ft · built 2024", source: "ridgemont" },
    ],
    sections: [
      {
        h2: "Living at Gatherings at Ridgemont",
        body:
          "Listings describe panoramic mountain views and evening city lights from one of Mesquite's highest elevations. Homes are single-story with energy-efficient 2×6 exterior walls.",
      },
      {
        h2: "New Build or Resale",
        body:
          "Beazer has offered to-be-built plans such as the 1,340 sq ft Haven plan. Resales carry builder upgrades and finished landscaping. Ask which builder warranty transfers with a resale.",
      },
    ],
    faqs: [
      { question: "Is Gatherings at Ridgemont age-restricted?", answer: "Yes. Listings mark it as a 55+ community. Check its HOA rules on who can live there." },
    ],
  },
  {
    slug: "royal-vista",
    name: "Royal Vista",
    tagline: "A gated neighborhood of single-story homes",
    image: IMAGES.entry,
    summary:
      "Royal Vista is a gated community within Mesquite Estates. A 2018 home at 60 Dancing Sky Trail sold for $619,000 on July 6, 2026.",
    facts: [
      { label: "Access", value: "Gated", source: "royalVista" },
      { label: "Recent sale", value: "$619,000 · 3 bd · 2,173 sq ft · built 2018 (Jul 6, 2026)", source: "royalVista" },
      { label: "Time on market", value: "267 days for that sale", source: "royalVista" },
    ],
    sections: [
      {
        h2: "Royal Vista Homes",
        body:
          "The July 2026 sale was a 3-bedroom-plus-den home built in 2018 by its original owner. It took 267 days to sell, so pricing to recent nearby sales matters here.",
      },
    ],
    faqs: [
      { question: "Is Royal Vista in Mesquite Estates gated?", answer: "Yes. Royal Vista is a gated community within Mesquite Estates, north of I-15 in ZIP 89027." },
    ],
  },
];

export const HOME_FAQS = [
  {
    question: "Where is Mesquite Estates in Mesquite, Nevada?",
    answer:
      "Mesquite Estates sits on the north side of Mesquite, north of I-15 in ZIP 89027, on higher ground with mountain and valley views. Mesquite is about 80 miles northeast of Las Vegas on Interstate 15.",
  },
  {
    question: "What do luxury homes in Mesquite Estates sell for?",
    answer:
      "From January 2024 to early October 2026, Mesquite Estates recorded 36 sales at $700,000 or more, at a median of $920,000. Sixteen of those sold for $1 million or more.",
  },
  {
    question: "Is Mesquite Estates a 55+ community?",
    answer:
      "No. Mesquite Estates is open to all ages. One section, Gatherings at Ridgemont, is age-restricted 55+.",
  },
  {
    question: "What are the HOA fees in Mesquite Estates?",
    answer:
      "The typical fee is about $83 a month. Owners pay the community HOA plus their own neighborhood's fee, so always check the total on the listing.",
  },
  {
    question: "Which schools serve Mesquite Estates?",
    answer:
      "Homes are zoned to Virgin Valley Elementary, Charles A. Hughes Middle and Virgin Valley High School in the Clark County School District. Confirm the zoning for a specific address with CCSD.",
  },
  {
    question: "Can I build a custom home in Mesquite Estates?",
    answer:
      "Yes. In October 2026, Mohave Ridge lots were listed from $165,000 to $205,000. Expect HOA design approval, minimum home sizes and a deadline to start building.",
  },
];

export const CONTACT = {
  phone: "702-718-2228",
  phoneHref: "tel:+17027182228",
  smsHref: "sms:+17027182228",
  email: "DrDuffy@MesquiteEstates.com",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
};
