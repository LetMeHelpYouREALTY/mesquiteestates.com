"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { FaHome, FaMapMarkerAlt, FaDollarSign, FaKey, FaChartLine } from "react-icons/fa";
import NearbyAmenitiesSection from "@/components/amenities/NearbyAmenitiesSection";

export default function MesquiteHomesForSale() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* H1 - Only One */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Mesquite Homes for Sale | Find Your Dream Home in Nevada with Dr. Jan Duffy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Explore Mesquite homes for sale with Dr. Jan Duffy, your trusted Mesquite realtor. Discover beautiful homes 
            and custom lots in Mesquite, Nevada ranging from $70K to $700K in the scenic Virgin River Valley, just an hour north of Las Vegas.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>

        {/* H2 Section 1 */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaHome className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Comprehensive Selection of Mesquite Homes for Sale
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            When searching for Mesquite homes for sale, you&apos;ll discover a diverse selection of properties that cater to 
            various lifestyles and budgets. Dr. Jan Duffy, your experienced Mesquite realtor with BHHS Nevada Properties, 
            specializes in helping clients find their ideal home in this beautiful desert community. The Mesquite real estate 
            market offers everything from starter homes to luxury estates, ensuring there&apos;s a perfect property for every buyer.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Mesquite homes for sale represent exceptional value in the Nevada real estate market. With prices ranging from 
            $360K to $700K for existing homes and custom lots starting at $70K, Mesquite real estate provides opportunities 
            for first-time homebuyers, growing families, retirees, and investors. The combination of affordable pricing, 
            quality construction, and desirable location makes Mesquite homes an attractive option for buyers seeking value 
            and lifestyle benefits.
          </p>
          <p className="text-base text-gray-700 mb-4">
            As your dedicated Mesquite realtor, Dr. Jan Duffy understands that finding the right home requires careful 
            consideration of your needs, preferences, and budget. Her expertise in Mesquite real estate allows her to guide 
            clients through the diverse selection of Mesquite homes for sale, identifying properties that offer the best 
            combination of features, location, and value. Whether you&apos;re seeking a golf course home, a family residence, 
            or a vacation property, her professional real estate services ensure a successful home search experience.
          </p>
          
          {/* H3 Subsection */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
              What Makes Mesquite Homes for Sale Unique?
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Mesquite homes for sale stand out in the Nevada real estate market due to their exceptional combination of 
              natural beauty, recreational opportunities, and community amenities. Located in the Virgin River Valley, 
              Mesquite homes offer stunning views of desert landscapes, flat-top red mesas, and championship golf courses. 
              This unique setting creates an unparalleled living environment that attracts buyers seeking both tranquility 
              and accessibility to world-class amenities.
            </p>
            <p className="text-base text-gray-700">
              The Mesquite real estate market benefits from the area&apos;s proximity to Las Vegas, located just an hour north, 
              providing convenient access to international airports, major shopping, and entertainment while maintaining a 
              peaceful small-town atmosphere. Mesquite homes for sale offer the best of both worlds: the serenity of desert 
              living with the convenience of nearby urban amenities.
            </p>
          </div>
        </section>

        {/* H2 Section 2 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaKey className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Price Range and Value of Mesquite Homes for Sale
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                Mesquite homes for sale offer exceptional value across various price points, making homeownership accessible 
                to a wide range of buyers. The Mesquite real estate market features homes priced from $360K to $700K, 
                providing options for different budgets and preferences. Custom lots starting at $70K offer opportunities for 
                buyers interested in building their dream home, while existing Mesquite homes provide immediate move-in 
                convenience and established neighborhoods.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Dr. Jan Duffy&apos;s expertise as a Mesquite realtor includes comprehensive market knowledge that helps clients 
                understand the value proposition of Mesquite homes for sale. Her analysis considers factors such as property 
                features, location within Mesquite, proximity to amenities, and market trends. This professional approach 
                ensures clients make informed decisions when selecting from available Mesquite homes for sale.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Investment Potential of Mesquite Real Estate
              </h3>
              <p className="text-base text-gray-700">
                Mesquite homes for sale represent strong investment opportunities due to the area&apos;s growing reputation as a 
                premier destination for retirees, vacation home buyers, and golf enthusiasts. The Mesquite real estate market 
                has shown consistent appreciation, driven by increasing demand for properties in this desirable location. 
                As a Mesquite realtor with extensive market knowledge, Dr. Jan Duffy provides clients with investment analysis 
                that helps them understand the long-term value potential of Mesquite homes.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2">
              <Image
                src="/Image/hero_bg_2.jpg"
                alt="Homes for sale in Mesquite, Nevada"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* H2 Section 3 */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Prime Locations for Mesquite Homes for Sale
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Mesquite homes for sale are located in various neighborhoods throughout this scenic desert community, each 
            offering unique advantages and characteristics. From golf course communities to quiet residential areas, Mesquite 
            real estate provides diverse location options to match different lifestyle preferences. Dr. Jan Duffy&apos;s expertise 
            as a Mesquite realtor includes comprehensive knowledge of neighborhood characteristics, helping clients find homes 
            in areas that best suit their needs.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Many Mesquite homes for sale are situated in close proximity to the area&apos;s seven championship golf courses, 
            providing residents with convenient access to world-class golfing. Other Mesquite homes offer proximity to resort 
            amenities, dining establishments, and entertainment venues. The variety of locations ensures that buyers can find 
            Mesquite homes for sale that match their specific preferences for lifestyle, accessibility, and community atmosphere.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            Golf Course Homes in Mesquite
          </h3>
          <p className="text-base text-gray-700 mb-4">
            A significant portion of Mesquite homes for sale are located near or on championship golf courses, offering 
            golf enthusiasts the ultimate living experience. These golf course homes in Mesquite provide stunning views of 
            manicured fairways and desert landscapes, creating an idyllic setting for golf lovers. Dr. Jan Duffy specializes 
            in helping clients find golf course homes in Mesquite that combine recreational access with luxurious living spaces.
          </p>
          <p className="text-base text-gray-700">
            Golf course homes represent premium options among Mesquite homes for sale, often featuring upgraded finishes, 
            outdoor living spaces, and direct course access. As a Mesquite realtor with expertise in golf course properties, 
            Dr. Jan Duffy understands the unique features and considerations that make these Mesquite homes desirable, 
            helping clients navigate this specialized segment of the Mesquite real estate market.
          </p>
        </section>

        {/* H2 Section 4 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:order-1">
              <Image
                src="/Image/hero_bg_3.jpg"
                alt="Custom lots and homes in Mesquite, Nevada"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="lg:order-2 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaDollarSign className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Custom Lots and New Construction in Mesquite
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                In addition to existing Mesquite homes for sale, the market offers custom lots starting at $70K for buyers 
                interested in building their dream home. These custom lots provide opportunities to create personalized 
                residences that reflect individual preferences and lifestyle needs. Dr. Jan Duffy assists clients in identifying 
                the best custom lots in Mesquite, considering factors such as location, views, topography, and building restrictions.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Building a custom home in Mesquite allows buyers to take advantage of the area&apos;s natural beauty while creating 
                a residence tailored to their specific requirements. Whether seeking a golf course lot, a desert view property, 
                or a quiet residential lot, Mesquite offers diverse options for custom home construction. As an experienced 
                Mesquite realtor, Dr. Jan Duffy provides guidance throughout the lot selection and home building process.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Working with a Mesquite Realtor for New Construction
              </h3>
              <p className="text-base text-gray-700">
                Selecting a custom lot and building a home in Mesquite requires specialized knowledge that an experienced 
                Mesquite realtor can provide. Dr. Jan Duffy&apos;s real estate services include lot evaluation, builder referrals, 
                and project coordination, ensuring clients have the support needed for successful custom home projects. 
                Her understanding of Mesquite real estate regulations, utility availability, and building requirements helps 
                clients make informed decisions when choosing custom lots.
              </p>
            </div>
          </div>
        </section>

        {/* H2 Section 5 */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaChartLine className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Working with Dr. Jan Duffy: Your Mesquite Realtor
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Dr. Jan Duffy is your trusted Mesquite realtor specializing in helping clients find their ideal home in this 
            premier desert destination. With extensive knowledge of Mesquite real estate, neighborhood characteristics, and 
            market trends, she provides expert guidance throughout the home buying process. Her commitment to client satisfaction 
            and professional real estate services ensures a successful and enjoyable home search experience.
          </p>
          <p className="text-base text-gray-700 mb-4">
            As a Mesquite realtor with BHHS Nevada Properties, Dr. Jan Duffy offers comprehensive services to buyers of 
            Mesquite homes for sale. These services include property search assistance, neighborhood tours, market analysis, 
            offer preparation, and negotiation. Her expertise in Mesquite real estate allows her to identify properties that 
            offer the best value and match client preferences, making the home search process efficient and effective.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            Comprehensive Realtor Services for Mesquite Home Buyers
          </h3>
          <p className="text-base text-gray-700 mb-4">
            When working with Dr. Jan Duffy as your Mesquite realtor, you benefit from professional real estate services 
            designed specifically for the Mesquite market. Her approach includes detailed property analysis, comparative 
            market evaluation, and expert negotiation on your behalf. This comprehensive service ensures that clients purchasing 
            Mesquite homes for sale receive maximum value and professional representation throughout the transaction.
          </p>
          <p className="text-base text-gray-700">
            The process of finding and purchasing Mesquite homes for sale requires local expertise and market knowledge that 
            only an experienced Mesquite realtor can provide. Dr. Jan Duffy&apos;s deep understanding of Mesquite real estate 
            trends, property values, and neighborhood characteristics ensures clients make informed decisions. Her professional 
            approach and commitment to excellence make her the ideal partner for your Mesquite home search.
          </p>
        </section>

        <NearbyAmenitiesSection
          title="What's Near Mesquite Homes"
          defaultCategory="grocery"
          className="mb-8 px-0"
        />

        {/* RealScout Office Listings */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Browse Current Mesquite Listings</h2>
          <p className="text-base text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Explore our current selection of homes, lots, and properties available in Mesquite, Nevada. 
            From custom lots starting at $70K to luxury homes up to $700K, find the perfect property for your lifestyle.
          </p>
          <div className="w-full">
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="NEWEST" 
              listing-status="For Sale"
            ></realscout-office-listings>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Explore Mesquite Homes for Sale Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Contact Dr. Jan Duffy, your trusted Mesquite realtor, to view available homes for sale. 
            Discover properties ranging from $70K to $700K in beautiful Mesquite, Nevada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-718-2228"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              📞 Call/Text 702-718-2228
            </a>
            <Link
              href="/Property/Property_type"
              className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              View All Homes
            </Link>
            <Link
              href="/Contact_us"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
            >
              Contact Form
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

