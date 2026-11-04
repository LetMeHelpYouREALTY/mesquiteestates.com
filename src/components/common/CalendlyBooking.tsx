import { CONTACT } from "@/data/mesquiteEstates";

/** Calendly booking block. Replaces the old contact and newsletter forms site-wide. */
export default function CalendlyBooking({ title = "Book a Time With Dr. Jan Duffy" }: { title?: string }) {
  const src = `${CONTACT.calendly}?embed_domain=www.mesquiteestates.com&embed_type=Inline&hide_gdpr_banner=1`;
  return (
    <section className="bg-sand" aria-labelledby="book-a-time">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-8">
        <h2 id="book-a-time" className="text-center font-display text-4xl font-semibold text-ink sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink/80">
          Pick a time that works for you: a home tour, a price check on your home, or a quick call. The office is open
          daily, 8 AM to 8 PM.
        </p>
        <div className="mt-8 overflow-hidden rounded-lg bg-white shadow-sm">
          <iframe
            src={src}
            title="Book a time with Dr. Jan Duffy"
            loading="lazy"
            className="h-[700px] w-full border-0"
          />
        </div>
        <p className="mt-4 text-center text-sm text-ink/70">
          Calendar not loading?{" "}
          <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className="font-semibold text-clay underline">
            Open the booking page
          </a>{" "}
          or call/text <a href={CONTACT.phoneHref} className="font-semibold text-clay underline">{CONTACT.phone}</a>.
        </p>
      </div>
    </section>
  );
}
