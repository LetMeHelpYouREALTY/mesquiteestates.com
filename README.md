# mesquiteestates.com

Website for **Mesquite Estates** and the Mesquite, Nevada market — Dr. Jan Duffy, REALTOR®,
Berkshire Hathaway HomeServices Nevada Properties (NV License S.0197614.LLC).

Live site: https://www.mesquiteestates.com · Hosting: Vercel · Images: Cloudflare R2

## What's on the site

| Area | Route(s) |
| --- | --- |
| Home (Mesquite Estates overview) | `/` |
| Homes for sale (live search) | `/mesquite-estates/homes-for-sale` |
| Neighborhoods hub | `/mesquite-estates/neighborhoods` |
| Neighborhood pages | `/mesquite-estates/{mohave-ridge, bella-horizon, cambria, gatherings-at-ridgemont, royal-vista}` |
| Land to build on | `/mesquite-estates/custom-home-lots` |
| Market report | `/mesquite-estates/market-report` |
| 55+ communities (all 7 compared) | `/55-plus-communities-mesquite` |
| Sun City Mesquite + golf | `/Sun_City_Mesquite`, `/Sun_City_Mesquite_*`, `/Conestoga_Golf_Mesquite` |
| Other Mesquite guides | `/About_Mesquite`, `/Mesquite_*`, `/communities/*`, `/sell-your-mesquite-home` |

Old template routes `/Property*`, `/Dashboard*`, `/Login`, `/contact` and `/about` redirect (308) to real pages — see `next.config.mjs`.

## Where things live

- **Neighborhood, 55+ and market data:** `src/data/mesquiteEstates.ts`. Every figure has a `source` key pointing to `SOURCES` (label with date + URL). Refresh monthly from MLS / CloudCMA.
- **Shared design components:** `src/components/luxe/Luxe.tsx` (hero, stat band, FAQ with schema, breadcrumbs, CTA).
- **Listings band under every hero:** `src/components/common/OfficeListings.tsx` (Mesquite search + office listings).
- **Nav / footer:** `src/components/common/Navbar.tsx`, `Footer.tsx`.
- **Site-wide schema:** `src/components/seo/StructuredData.tsx`; per-page FAQ schema via `<FaqBlock>`.
- **AI crawler summary:** `src/app/llms.txt/route.ts`.
- **Analytics:** `src/components/analytics/RealtorAnalytics.tsx` (GA4, disabled on preview URLs).

## Images

Illustrative, photorealistic images are generated with Cloudflare Workers AI and stored in the R2 bucket
`mesquiteestates-images` (public URL in `IMG_BASE`). They are captioned "Illustrative image" and never depict a real listing.

## Content rules

- Fair Housing first: no protected-class references or proxies ("family-friendly", "safe", "good schools"). Describe features, school names, and distances instead.
- Plain language for buyers and sellers — no industry or tool jargon in visible copy.
- Every number needs a dated source in `SOURCES`.
- Site phone: 702-718-2228.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Pushing a branch creates a Vercel preview; merging to `main` deploys production.
