import Link from "next/link";

/** RealScout office listings band — placed directly below the hero on every page. */
export default function OfficeListings() {
  return (
    <section className="bg-sand" aria-labelledby="office-listings">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Live MLS</p>
            <h2 id="office-listings" className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Newest BHHS Nevada Properties Listings
            </h2>
          </div>
          <Link
            href="/mesquite-estates/homes-for-sale"
            className="inline-flex items-center justify-center rounded-full border border-clay px-6 py-3 text-xs font-semibold uppercase tracking-widest text-clay transition hover:bg-clay hover:text-white"
          >
            Search All Mesquite Estates Homes →
          </Link>
        </div>
        <div className="w-full max-w-full overflow-hidden">
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types=",SFR,OTHER,MOBILE"
          ></realscout-office-listings>
        </div>
      </div>
    </section>
  );
}
