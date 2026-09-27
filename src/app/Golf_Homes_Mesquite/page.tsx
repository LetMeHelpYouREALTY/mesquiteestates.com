"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import NearbyAmenitiesSection from "@/components/amenities/NearbyAmenitiesSection";
import { FaGolfBall, FaMapMarkerAlt, FaHome, FaTree, FaDollarSign } from "react-icons/fa";

export default function GolfHomesMesquite() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* H1 - Only One */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Golf Homes in Mesquite, Nevada | Luxury Living on Premier Golf Courses
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Discover exceptional golf homes in Mesquite, Nevada with Dr. Jan Duffy, your trusted Mesquite realtor. 
            Explore luxury homes and custom lots from $70K to $700K on championship golf courses in the beautiful Virgin River Valley.
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
            <FaGolfBall className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Premium Golf Homes in Mesquite, Nevada
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Mesquite, Nevada is a golfer&apos;s paradise, offering some of the most spectacular golf homes in the Southwest. 
            As your dedicated Mesquite realtor, Dr. Jan Duffy specializes in helping clients find their dream golf home 
            in this premier desert destination. With seven championship golf courses within just a 10-minute drive, Mesquite 
            provides unparalleled access to world-class golfing while maintaining the tranquility of small-town living.
          </p>
          <p className="text-base text-gray-700 mb-4">
            When searching for golf homes in Mesquite, you&apos;ll discover properties ranging from $360K to $700K, each offering 
            unique advantages. These golf homes are strategically positioned to provide stunning views of meticulously maintained 
            fairways, desert landscapes, and the majestic flat-top red mesas that define the Mesquite skyline. Dr. Jan Duffy&apos;s 
            expertise as a Mesquite real estate professional ensures you find homes that combine luxury living with exceptional 
            golf course access.
          </p>
          
          {/* H3 Subsection */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
              Why Choose Golf Homes in Mesquite?
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Golf homes in Mesquite represent an exceptional investment opportunity for both primary residence and vacation 
              property buyers. The combination of championship golf courses, resort amenities, and natural beauty creates an 
              unparalleled lifestyle. Mesquite homes on golf courses offer year-round golfing opportunities thanks to over 300 
              days of sunshine annually, making them ideal for golf enthusiasts seeking the perfect desert golf community.
            </p>
            <p className="text-base text-gray-700">
              Dr. Jan Duffy, a trusted Mesquite realtor with BHHS Nevada Properties, understands the unique appeal of golf homes 
              in this region. Whether you&apos;re looking for a custom lot from $70K to build your dream golf home or an existing 
              luxury residence, her expertise in Mesquite real estate ensures you find properties that meet your specific needs 
              and preferences.
            </p>
          </div>
        </section>

        {/* H2 Section 2 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaHome className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Championship Golf Courses Near Mesquite Homes
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                Mesquite&apos;s seven championship golf courses are the crown jewel of this desert community, attracting golfers from 
                around the world. When searching for golf homes in Mesquite, Dr. Jan Duffy can guide you to properties near 
                these premier courses, each designed by renowned golf course architects and featuring unique challenges and 
                breathtaking desert views.
              </p>
              <p className="text-base text-gray-700 mb-4">
            The proximity of golf homes to these courses means residents enjoy convenient access to world-class golfing 
            opportunities. Many Mesquite homes for sale are situated within walking distance or a short golf cart ride to 
            multiple courses, creating an ideal lifestyle for golf enthusiasts. This accessibility is one of the primary 
            reasons buyers choose Mesquite real estate for their golf home investments. Sun City Mesquite features the 
            award-winning <Link href="/Conestoga_Golf_Mesquite" className="text-indigo-900 hover:text-indigo-600 underline font-semibold">Conestoga Golf Club</Link>, 
            an 18-hole championship course designed by Gary Panks.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Golf Course Communities in Mesquite
              </h3>
              <p className="text-base text-gray-700 mb-4">
                Mesquite real estate offers several distinct golf course communities, each with its own character and amenities. 
                As a seasoned Mesquite realtor, Dr. Jan Duffy helps clients navigate these communities to find golf homes that 
                perfectly match their lifestyle. These communities feature well-maintained properties, community amenities, and 
                direct access to championship golf courses.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2">
              <Image
                src="/Image/hero_bg_1.jpg"
                alt="Golf homes in Mesquite, Nevada"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* H2 Section 3 */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FaDollarSign className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Mesquite Golf Homes Price Range and Investment Value
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Investing in golf homes in Mesquite offers exceptional value compared to other golf communities in the Southwest. 
            Dr. Jan Duffy&apos;s expertise as a Mesquite realtor reveals that golf homes in this area provide more square footage, 
            better views, and superior amenities at competitive prices. Custom lots for golf homes start at $70K, while existing 
            golf homes range from $360K to $700K, making Mesquite real estate accessible to a wide range of buyers.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The Mesquite real estate market for golf homes has shown consistent growth, driven by the area&apos;s expanding reputation 
            as a premier golf destination. Golf homes in Mesquite offer both lifestyle benefits and strong investment potential, 
            particularly for those seeking vacation properties or retirement homes in a golf community setting.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            Custom Golf Home Lots in Mesquite
          </h3>
          <p className="text-base text-gray-700 mb-4">
            For buyers interested in building their dream golf home, Mesquite offers custom lots from $70K in prime locations 
            near championship courses. Dr. Jan Duffy specializes in helping clients identify the best lots for golf homes, 
            considering factors such as course proximity, views, topography, and community amenities. These custom lots provide 
            the foundation for creating personalized golf homes that reflect your unique preferences and lifestyle.
          </p>
        </section>

        {/* H2 Section 4 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:order-1">
              <Image
                src="/Image/hero_bg_2.jpg"
                alt="Luxury golf homes in Mesquite, Nevada"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="lg:order-2 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaTree className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Lifestyle Benefits of Golf Homes in Mesquite
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                Living in golf homes in Mesquite means enjoying a lifestyle that seamlessly blends recreation, relaxation, and 
                natural beauty. Beyond the exceptional golfing opportunities, Mesquite homes near golf courses offer access to 
                resort amenities, fine dining, live entertainment, and 24-hour casino action. This combination creates an 
                unmatched living experience in the heart of the Virgin River Valley.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Golf homes in Mesquite are surrounded by stunning desert landscapes, with views of the Virgin River Valley and 
                distinctive red mesas. The natural beauty complements the manicured golf course landscapes, creating a serene 
                environment that enhances daily living. Dr. Jan Duffy understands that buyers of golf homes seek both the 
                recreational opportunities and the peaceful ambiance that Mesquite real estate provides.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Year-Round Golfing from Your Mesquite Home
              </h3>
              <p className="text-base text-gray-700">
                One of the primary advantages of golf homes in Mesquite is the year-round golfing climate. With over 300 days 
                of sunshine annually, residents can enjoy golf nearly every day of the year. This consistent weather pattern 
                makes Mesquite real estate particularly attractive to golf enthusiasts seeking an active lifestyle. Whether 
                you&apos;re looking for a primary residence or vacation golf home, Mesquite offers the perfect climate for year-round 
                golf enjoyment.
              </p>
            </div>
          </div>
        </section>

        {/* H2 Section 5 */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Working with Dr. Jan Duffy for Mesquite Golf Homes
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Dr. Jan Duffy is your trusted Mesquite realtor specializing in golf homes and luxury real estate in this premier 
            golf destination. With extensive knowledge of Mesquite real estate, golf course communities, and the unique features 
            that make golf homes desirable, she provides expert guidance throughout your home search process.
          </p>
          <p className="text-base text-gray-700 mb-4">
            As a Mesquite realtor with BHHS Nevada Properties, Dr. Jan Duffy understands the nuances of purchasing golf homes 
            in this market. Her expertise includes knowledge of course restrictions, community amenities, resale values, and 
            investment potential specific to golf homes. Whether you&apos;re seeking a custom lot to build your dream golf home or 
            an existing property, her professional real estate services ensure a successful transaction.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            Comprehensive Realtor Services for Mesquite Golf Homes
          </h3>
          <p className="text-base text-gray-700 mb-4">
            Dr. Jan Duffy offers comprehensive realtor services specifically tailored to buyers of golf homes in Mesquite. 
            These services include property search assistance, golf course community tours, market analysis, and expert 
            negotiation. Her understanding of Mesquite real estate trends and golf home values ensures clients make informed 
            decisions when purchasing their ideal golf property.
          </p>
          <p className="text-base text-gray-700">
            The process of finding golf homes in Mesquite requires specialized knowledge that only an experienced Mesquite realtor 
            can provide. Dr. Jan Duffy&apos;s real estate expertise covers all aspects of golf home purchases, from initial property 
            viewing to closing. Her commitment to client satisfaction and deep understanding of Mesquite&apos;s golf home market makes 
            her the ideal partner for your golf home search.
          </p>
        </section>

        <NearbyAmenitiesSection
          title="Golf & Amenities Near Mesquite Fairways"
          defaultCategory="golf"
          className="mb-8 px-0"
        />

        {/* RealScout Office Listings */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Golf Homes & Properties Available</h2>
          <p className="text-base text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Browse our current selection of golf course homes and properties in Mesquite. Discover luxury homes 
            on championship golf courses, custom lots with golf course views, and 55+ golf community properties.
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
            Find Your Dream Golf Home in Mesquite Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Contact Dr. Jan Duffy, your trusted Mesquite realtor, to explore golf homes for sale. 
            Discover luxury homes and custom lots from $70K to $700K on championship golf courses.
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
              View Golf Homes
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

