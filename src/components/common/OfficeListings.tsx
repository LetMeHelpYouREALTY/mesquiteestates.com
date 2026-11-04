import Link from "next/link";

/**
 * Listings band placed directly below the hero on every page.
 * The RealScout office-listings widget can't filter by city (only sort, status, type, price),
 * so a Mesquite search box sits first and the office feed is labeled honestly.
 */
export default function OfficeListings() {
  return (
    <section className="bg-sand" aria-labelledby="office-listings">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
        <div className="rounded-sm bg-ink px-6 py-8 text-center text-sand sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-dune">Mesquite Homes First</p>
          <h2 id="office-listings" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Search Homes for Sale in Mesquite, NV
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-dune">
            Type &ldquo;Mesquite, NV&rdquo; to see every Mesquite home and lot for sale, then save your favorites.
          </p>
          <div className="mt-6 flex justify-center">
            <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
          </div>
        </div>

        <div className="mb-6 mt-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Just Listed</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Newest Berkshire Hathaway Listings Across Southern Nevada
            </h3>
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
