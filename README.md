# mesquiteestates.com

Hyperlocal real estate site for Mesquite Estates and Mesquite, Nevada — Dr. Jan Duffy, REALTOR®.

## Stack

- Next.js 15 (App Router) + React 19, TypeScript
- Tailwind CSS (`tailwind.config.js` is the only Tailwind config)
- Hosted on Vercel (`janet-duffys-projects/mesquiteestates.com`); pushes to `main` deploy to production
- DNS on Cloudflare
- Leads: `/api/newsletter` posts to Follow Up Boss (`src/lib/fub.ts`)

## Develop

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # run before every push
```

## Where things live

| What | Where |
| --- | --- |
| Site name, URL, description | `src/config/siteConfig.ts` |
| Site phone (error fallback) | `src/lib/contact-constants.ts` |
| Sitemap / robots / llms.txt | `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/llms.txt/route.ts` |
| Schema markup | `src/components/seo/StructuredData.tsx` |
| Images | `public/Image/` — keep photos under ~600 KB and ≤1920 px wide |

## Rules for this site

- This site has its own phone number. Don't swap in another site's number or the general CTA line.
- Fair Housing: no protected-class wording or proxies ("family-friendly", "safe neighborhood", "good schools"). Describe homes, lots, amenities, and distances instead.
- Brokerage name and license appear in the footer only.
- `/Dashboard` and `/Login` are template pages with demo data; they are noindexed and disallowed in robots.
- `/Property/*` was retired and 301-redirects to `/Mesquite_Homes_For_Sale` (see `next.config.mjs`).
- Work on a branch and open a PR; Vercel builds a preview for every PR.
