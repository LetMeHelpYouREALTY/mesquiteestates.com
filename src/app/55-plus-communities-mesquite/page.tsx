import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { LuxeHero, StatBand, SplitFeature, FaqBlock, CtaBand, Eyebrow, SourceNote, Breadcrumbs } from "@/components/luxe/Luxe";
import { FIFTY_FIVE, IMAGES, type Stat } from "@/data/mesquiteEstates";

const STATS: Stat[] = [
  { value: "$395K", label: "Median Sun City Mesquite sale, September 2026 (25 sales)", source: "sept2026" },
  { value: "$349,990", label: "Lowest new Del Webb price in Sun City Mesquite, Oct 12, 2026", source: "scmGuide" },
  { value: "$389,990", label: "Starting price for new Beazer homes at Gatherings at Ridgemont", source: "beazer" },
  { value: "5 of 7", label: "Mesquite 55+ communities on this page that are gated", source: "gated" },
];

const FAQS = [
  {
    question: "What are the 55+ communities in Mesquite, NV?",
    answer:
      "Mesquite's 55+ communities include Sun City Mesquite, Gatherings at Ridgemont, Shadow Crest, Sun Crest, Mesa Hills, Highland Fairways and Highland Hills. Sun City Mesquite is by far the largest and the only one with its own clubhouse, pools and golf course.",
  },
  {
    question: "Do both people have to be 55 or older?",
    answer:
      "No. In Sun City Mesquite, each home generally needs at least one resident age 55 or older. Federal rules require at least 80% of occupied homes in a 55+ community to have one resident 55 or older. Check each community's own rules before you buy.",
  },
  {
    question: "What are HOA fees in Mesquite 55+ communities?",
    answer:
      "Del Webb lists Sun City Mesquite dues at $145 a month, collected quarterly. Gatherings at Ridgemont runs about $107 a month including cable TV. Gated communities like Shadow Crest, Sun Crest and Mesa Hills run about $238 to $258 a month.",
  },
  {
    question: "Is Sun City Mesquite gated?",
    answer:
      "No. Sun City Mesquite is not gated. Shadow Crest, Sun Crest, Mesa Hills, Highland Fairways and Highland Hills are gated 55+ options.",
  },
  {
    question: "Is golf included in Sun City Mesquite HOA dues?",
    answer:
      "No. Conestoga Golf Club is run as a separate business. Residents can buy a resident pass for lower rates and preferred tee times.",
  },
];

export default function FiftyFivePlus() {
  return (
    <>
      <Navbar />
      <main>
        <LuxeHero
          image={IMAGES.clubhouse}
          eyebrow="55+ Living · Mesquite, Nevada"
          title="55+ Communities in Mesquite, NV"
          subtitle="Seven 55+ communities, from Del Webb's Sun City Mesquite to small gated neighborhoods. Compare prices, HOA fees and what each one includes."
          primary={{ href: "#compare", label: "Compare All Seven" }}
        />
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "55+ Communities", href: "/55-plus-communities-mesquite" }]} />

        <StatBand stats={STATS} />

        <section id="compare" className="scroll-mt-32 bg-sand" aria-labelledby="compare-h">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
            <Eyebrow>Side by Side</Eyebrow>
            <h2 id="compare-h" className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Mesquite 55+ Communities Compared</h2>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[820px] text-left text-sm">
                <thead className="border-b-2 border-clay/50 text-xs uppercase tracking-widest text-mesa">
                  <tr>
                    <th className="py-3 pr-4">Community</th>
                    <th className="py-3 pr-4">Price</th>
                    <th className="py-3 pr-4">HOA</th>
                    <th className="py-3 pr-4">Gated</th>
                    <th className="py-3 pr-4">Built</th>
                    <th className="py-3 pr-4">Good to know</th>
                  </tr>
                </thead>
                <tbody>
                  {FIFTY_FIVE.map((c) => (
                    <tr key={c.name} className="border-b border-mesa/20 align-top">
                      <td className="py-4 pr-4">
                        {c.href ? (
                          <Link href={c.href} className="font-display text-xl font-semibold text-ink hover:text-clay">{c.name}</Link>
                        ) : (
                          <span className="font-display text-xl font-semibold text-ink">{c.name}</span>
                        )}
                        <span className="block text-xs text-mesa">{c.builder !== "—" ? c.builder : ""}</span>
                      </td>
                      <td className="py-4 pr-4 text-ink/80">{c.price}</td>
                      <td className="py-4 pr-4 text-ink/80">{c.hoa}</td>
                      <td className="py-4 pr-4 text-ink/80">{c.gated ? "Yes" : "No"}</td>
                      <td className="py-4 pr-4 text-ink/80">{c.built}</td>
                      <td className="py-4 pr-4 text-ink/80">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <SourceNote keys={FIFTY_FIVE.flatMap((c) => c.sources)} className="mt-6" />
          </div>
        </section>

        <SplitFeature image={IMAGES.golfBackyard} eyebrow="The Biggest Choice" title="Sun City Mesquite by Del Webb">
          <p>
            Sun City Mesquite surrounds Conestoga Golf Club and is still selling new homes. On October 12, 2026, Del Webb listed three
            series: Cottage from $349,990, Retreat from $429,990 and Encore from $491,990.
          </p>
          <p>
            <Link href="/Sun_City_Mesquite" className="font-semibold text-clay underline underline-offset-4">See Sun City Mesquite homes and details →</Link>
          </p>
          <SourceNote keys={["scmGuide"]} />
        </SplitFeature>

        <section className="bg-dune/60">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
            <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">What Sun City Mesquite HOA Dues Cover</h2>
            <p className="mt-4 max-w-3xl text-lg text-ink/80">Del Webb lists dues of $145 a month, collected quarterly and subject to change.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { h3: "The Pioneer Center", body: "A 30,560 sq ft clubhouse staffed by 6 concierges, with free Wi-Fi and a lending library of more than 4,500 titles." },
                { h3: "Outdoor Courts", body: "Pickleball, basketball and tennis courts, plus an 18-hole putting course." },
                { h3: "What's Not Included", body: "Golf. Conestoga Golf Club is a separate business with a resident pass for lower rates." },
              ].map((x) => (
                <div key={x.h3} className="bg-white p-6 shadow-sm">
                  <h3 className="font-display text-2xl font-semibold text-ink">{x.h3}</h3>
                  <p className="mt-3 text-ink/80">{x.body}</p>
                </div>
              ))}
            </div>
            <SourceNote keys={["delwebbHoa", "scmGuide"]} className="mt-8" />
          </div>
        </section>

        <SplitFeature image={IMAGES.ridgemont} eyebrow="Smaller and Newer" title="Gatherings at Ridgemont by Beazer" reverse>
          <p>
            A newer 55+ neighborhood of 81 single-story homes, building since 2022. New homes start at $389,990, with solar included and
            a community dog park.
          </p>
          <p>HOA dues run about $107 a month and include cable TV.</p>
          <p>
            <Link href="/mesquite-estates/gatherings-at-ridgemont" className="font-semibold text-clay underline underline-offset-4">See Gatherings at Ridgemont details →</Link>
          </p>
          <SourceNote keys={["beazer", "fiftyFive"]} />
        </SplitFeature>

        <section className="bg-sand">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-8">
            <h2 className="font-display text-4xl font-semibold text-ink">Gated 55+ Options in Mesquite</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              Sun City Mesquite is not gated. If a gate matters to you, look at Shadow Crest, Sun Crest, Mesa Hills, Highland Fairways
              and Highland Hills. Gated neighborhoods pay for gates and private streets, so dues run higher, about $215 to $258 a month.
            </p>
            <SourceNote keys={["gated", "highlandVistas"]} className="mt-6" />
          </div>
        </section>

        <FaqBlock title="Mesquite 55+ Questions, Answered" faqs={FAQS} />
        <CtaBand title="Find Your 55+ Home in Mesquite" body="Tell Dr. Jan your budget, gate preference and must-haves. Get a shortlist with recent sale prices." />
      </main>
      <Footer />
    </>
  );
}
