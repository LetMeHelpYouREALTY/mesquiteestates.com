import Link from 'next/link';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import AmenityMap from '@/components/amenities/AmenityMap';
import StaticAmenityList from '@/components/amenities/StaticAmenityList';
import NearbyAmenitiesStructuredData, {
  faqItems,
} from '@/components/seo/NearbyAmenitiesStructuredData';
import { communityMapConfig } from '@/config/amenityMapConfig';

export default function NearbyAmenitiesPage() {
  return (
    <>
      <NearbyAmenitiesStructuredData />
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Nearby Amenities in {communityMapConfig.communityName}, Nevada
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Mesquite Estates sits in the Virgin River Valley — a golf-and-resort town about an hour north of
            Las Vegas. Use the interactive map to explore dining, healthcare, groceries, parks, and more
            around Mesquite homes.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>

        <section className="mb-16" aria-labelledby="amenity-map-heading">
          <h2 id="amenity-map-heading" className="text-3xl font-semibold text-indigo-900 mb-4">
            Interactive amenity map
          </h2>
          <AmenityMap defaultCategory="golf" showStaticList={false} />
        </section>

        <section className="mb-16 prose prose-indigo max-w-none">
          <h2 className="text-3xl font-semibold text-indigo-900 mb-4">Golf &amp; recreation</h2>
          <p className="text-gray-700 mb-4">
            Mesquite is known for championship desert golf.{' '}
            <strong>Conestoga Golf Club</strong> (1025 Omaha Dr) hosts Sun City Mesquite&apos;s
            resident course; <strong>Wolf Creek Golf Club</strong> (4031 Wolf Creek Dr) is a
            nationally recognized public layout; and <strong>CasaBlanca Golf Club</strong> (511 W
            Mesquite Blvd) pairs with resort amenities along Mesquite Boulevard.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Mesquite Veterans Memorial Park</strong> (836 E Pioneer Blvd) offers a central
            public park for walking and community events. Sun City Mesquite&apos;s Pioneer Center
            and trail network serve active-adult residents — see our{' '}
            <Link href="/Sun_City_Mesquite_Amenities" className="text-indigo-700 underline">
              Sun City amenities guide
            </Link>{' '}
            for on-site recreation.
          </p>

          <h2 className="text-3xl font-semibold text-indigo-900 mb-4 mt-10">Dining &amp; cafes</h2>
          <p className="text-gray-700 mb-4">
            Mesquite Boulevard and Pioneer Boulevard cluster casinos, resorts, and local restaurants.
            CasaBlanca Resort on W Mesquite Blvd includes dining and entertainment venues. For a wider
            selection, many residents drive to St. George, Utah, or Las Vegas for specialty dining —
            both are reachable by car from Mesquite.
          </p>

          <h2 className="text-3xl font-semibold text-indigo-900 mb-4 mt-10">Healthcare &amp; pharmacies</h2>
          <p className="text-gray-700 mb-4">
            <strong>Mesa View Regional Medical Center</strong> (1299 Bertha Howe Ave) is Mesquite&apos;s
            hospital serving Clark County&apos;s northeastern communities. <strong>CVS Pharmacy</strong>{' '}
            (611 W Mesquite Blvd) and grocery-store pharmacies at Smith&apos;s and Albertsons cover
            routine prescriptions.
          </p>

          <h2 className="text-3xl font-semibold text-indigo-900 mb-4 mt-10">Grocery &amp; shopping</h2>
          <p className="text-gray-700 mb-4">
            <strong>Smith&apos;s Food and Drug</strong> (1127 W Pioneer Blvd) and{' '}
            <strong>Albertsons</strong> (475 W Mesquite Blvd) are the primary supermarkets in town.{' '}
            <strong>Walmart Supercenter</strong> (1120 W Pioneer Blvd) adds general merchandise and
            additional grocery options along the Pioneer corridor near Mesquite Estates.
          </p>

          <h2 className="text-3xl font-semibold text-indigo-900 mb-4 mt-10">Schools</h2>
          <p className="text-gray-700 mb-4">
            Families in Mesquite are served by the Clark County School District.{' '}
            <strong>Virgin Valley High School</strong> (820 Valley View Dr) is the local public high
            school. Contact the district for current attendance zones and enrollment.
          </p>

          <h2 className="text-3xl font-semibold text-indigo-900 mb-4 mt-10">
            Commute &amp; drive times (approximate)
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Las Vegas Strip / Harry Reid International Airport:</strong> ~80 miles south on
              I-15 — about one hour by car in typical conditions.
            </li>
            <li>
              <strong>St. George, Utah:</strong> Roughly 40 miles northeast on I-15 — often under one
              hour by car.
            </li>
            <li>
              <strong>Zion National Park:</strong> Northeast of Mesquite via UT-9; plan on a scenic
              drive of about one hour depending on your trailhead (approximate).
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">
            Drive times vary with traffic, weather, and road work. See our{' '}
            <Link href="/Mesquite_Transportation" className="text-indigo-700 underline">
              Mesquite transportation guide
            </Link>{' '}
            for more detail.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-900 mb-4">Featured nearby places</h2>
          <StaticAmenityList showAllCategories />
        </section>

        <section className="mb-16" aria-labelledby="amenities-faq">
          <h2 id="amenities-faq" className="text-3xl font-semibold text-indigo-900 mb-6">
            Mesquite amenities FAQ
          </h2>
          <dl className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-lg border border-gray-200 bg-indigo-50/50 p-5">
                <dt className="text-lg font-semibold text-indigo-900">{item.question}</dt>
                <dd className="mt-2 text-gray-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-12 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Mesquite hyperlocal REALTOR®
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto text-indigo-100">
            Dr. Jan Duffy knows Mesquite golf communities, custom lots, and everyday convenience —
            from Pioneer Boulevard to the fairways. Berkshire Hathaway HomeServices Nevada Properties.
          </p>
          <p className="text-indigo-100 mb-8">
            1155 W Pioneer Blvd, Suite 104-D · Mesquite, NV 89027 · Nevada License #S.0197614.LLC
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-718-2228"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              📞 Call/Text 702-718-2228
            </a>
            <Link
              href="/Contact_us"
              className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Contact Form
            </Link>
            <Link
              href="/Mesquite_Homes_For_Sale"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
            >
              Mesquite Homes for Sale
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
