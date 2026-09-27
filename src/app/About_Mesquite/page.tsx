"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Newsletter from "@/components/common/Newsletter";
import Link from "next/link";
import { FaMapMarkerAlt, FaMountain, FaGolfBall, FaUmbrellaBeach, FaTree, FaRoute } from "react-icons/fa";
import NearbyAmenitiesSection from "@/components/amenities/NearbyAmenitiesSection";

export default function AboutMesquite() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Welcome to Mesquite, Nevada | Discover Homes and Golf Course Living in the Virgin River Valley
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            About an hour north of Las Vegas, you&apos;ll find Mesquite, a small town nestled in the picturesque Virgin River Valley. 
            Surrounded by scenic vistas and flat-top red mesas, this friendly, small-town destination is complemented by welcoming 
            resorts, seven golf courses within a 10-minute drive, and its close proximity to national and state parks. Dr. Jan Duffy, 
            your trusted Mesquite realtor, specializes in helping clients discover beautiful homes and golf course properties in this 
            premier desert destination.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>

        {/* Location & Geography */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Location & Geography
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                Mesquite is strategically located about an hour north of Las Vegas in the beautiful Virgin River Valley. 
                The town is surrounded by stunning scenic vistas and distinctive flat-top red mesas that create a breathtaking 
                desert landscape unlike anywhere else. This unique geography makes Mesquite homes highly desirable for buyers 
                seeking natural beauty combined with accessibility to major urban centers.
              </p>
              <p className="text-base text-gray-700 mb-4">
                The Virgin River Valley provides a unique setting that combines the tranquility of a small-town community 
                with access to world-class amenities and entertainment. The natural beauty of the area makes it an ideal 
                location for those seeking both adventure and relaxation. Mesquite real estate offers opportunities for golf 
                homes, family residences, and vacation properties that take advantage of this exceptional location.
              </p>
              <p className="text-base text-gray-700 mb-6">
                Dr. Jan Duffy, an experienced Mesquite realtor with BHHS Nevada Properties, helps clients understand the 
                unique advantages of Mesquite&apos;s location when searching for homes. The proximity to Las Vegas provides 
                convenient access to international airports, major shopping, and world-class entertainment, while Mesquite 
                itself offers a peaceful retreat from urban life. This combination makes Mesquite homes attractive to buyers 
                seeking the best of both worlds.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Approximately 80 miles north of Las Vegas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Nestled in the scenic Virgin River Valley</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Surrounded by flat-top red mesas and desert vistas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Close proximity to Zion National Park and other natural wonders</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2">
              <Image
                src="/Image/hero_bg_1.jpg"
                alt="Mesquite, Nevada landscape"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Golf Courses */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FaGolfBall className="text-indigo-900 text-3xl mr-3" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                Championship Golf Courses
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
              Mesquite is a golfer&apos;s paradise with seven championship golf courses within just a 10-minute drive. 
              Whether you&apos;re a seasoned pro or a casual player, you&apos;ll find courses that challenge your skills while 
              providing a breathtaking backdrop of the desert landscape. This exceptional golf infrastructure makes Mesquite 
              an ideal location for golf homes and properties near championship courses.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The concentration of championship golf courses in Mesquite creates opportunities for golf homes that offer 
              convenient access to world-class golfing. Dr. Jan Duffy specializes in helping clients find golf homes in 
              Mesquite that combine luxury living with exceptional golf course access. Whether you&apos;re seeking a home on a 
              golf course or near multiple courses, Mesquite real estate offers diverse options for golf enthusiasts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">World-Class Facilities</h3>
              <p className="text-gray-600">
                Seven championship courses designed by renowned architects, each offering unique challenges and stunning views.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Year-Round Golf</h3>
              <p className="text-gray-600">
                With over 300 days of sunshine annually, Mesquite offers ideal golfing conditions throughout the year.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Easy Access</h3>
              <p className="text-gray-600">
                All courses are within a 10-minute drive from Mesquite Estates, making it convenient to play multiple rounds.
              </p>
            </div>
          </div>
        </section>

        {/* Recreation & Activities */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:order-1">
              <Image
                src="/Image/hero_bg_2.jpg"
                alt="Mesquite recreation and activities"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="lg:order-2 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaUmbrellaBeach className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Recreation & Activities
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                Mesquite offers a vibrant lifestyle with something for everyone. Enjoy 24-hour casino action, live entertainment, 
                delicious dining options, and exciting annual sports and special events for the whole family. This vibrant 
                atmosphere makes Mesquite homes appealing to buyers seeking an active lifestyle with diverse recreational opportunities.
              </p>
              <p className="text-base text-gray-700 mb-6">
                The recreational amenities in Mesquite enhance the value of Mesquite real estate, providing residents with 
                year-round entertainment and activities. Whether you&apos;re interested in golf homes, resort living, or quiet 
                residential properties, Mesquite offers diverse options that cater to various lifestyle preferences. Dr. Jan Duffy&apos;s 
                expertise as a Mesquite realtor helps clients identify properties that match their recreational interests and 
                lifestyle goals.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2">Resorts & Casinos</h3>
                  <p className="text-gray-600">
                    Welcoming resorts offer 24-hour casino action, live entertainment, and top-notch amenities. 
                    Experience the excitement that doesn&apos;t stop when the sun goes down.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2">Dining & Entertainment</h3>
                  <p className="text-gray-600">
                    From steak houses to buffets boasting food from around the globe, Mesquite offers diverse dining 
                    experiences. Enjoy live shows and entertainment throughout the year.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2">Sports & Events</h3>
                  <p className="text-gray-600">
                    Exciting annual sports tournaments and special events bring the community together. 
                    There&apos;s always something happening in Mesquite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proximity to Attractions */}
        <section className="mb-16 bg-indigo-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FaRoute className="text-indigo-900 text-3xl mr-3" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                Proximity to Major Attractions
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mesquite&apos;s prime location offers easy access to some of the Southwest&apos;s most spectacular natural wonders 
              and entertainment destinations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaMountain className="text-indigo-900 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Zion National Park</h3>
              <p className="text-gray-600 mb-4">
                Just a short drive away, explore the stunning red rock canyons and hiking trails of one of America&apos;s 
                most beautiful national parks.
              </p>
              <p className="text-sm text-indigo-600 font-semibold">~1 hour drive</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaTree className="text-indigo-900 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-indigo-900 mb-3">National & State Parks</h3>
              <p className="text-gray-600 mb-4">
                Close proximity to multiple national and state parks offering hiking, camping, and breathtaking natural beauty 
                for outdoor enthusiasts.
              </p>
              <p className="text-sm text-indigo-600 font-semibold">Multiple parks nearby</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaRoute className="text-indigo-900 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Las Vegas</h3>
              <p className="text-gray-600 mb-4">
                World-class entertainment, dining, shopping, and nightlife are just an hour away in Las Vegas, 
                yet you enjoy the tranquility of small-town living.
              </p>
              <p className="text-sm text-indigo-600 font-semibold">~1 hour drive</p>
            </div>
          </div>
        </section>

        {/* Lifestyle & Community */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                Lifestyle & Community
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Mesquite embodies the perfect balance of a friendly small-town atmosphere with world-class amenities. 
                The welcoming community and relaxed pace of life make it an ideal place to call home.
              </p>
              <p className="text-base text-gray-600 mb-6">
                Whether you&apos;re looking for a retirement destination, a vacation home, or a permanent residence, 
                Mesquite offers a lifestyle that combines natural beauty, recreational opportunities, and modern conveniences.
              </p>
              <div className="bg-indigo-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Why Choose Mesquite?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Friendly small-town community atmosphere</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>World-class golf and resort amenities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Stunning natural surroundings and desert vistas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Close to major attractions yet peaceful and quiet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Year-round outdoor recreation opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2">
              <Image
                src="/Image/hero_bg_3.jpg"
                alt="Mesquite community and lifestyle"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Welcome Center Information */}
        <section className="mb-16 bg-gray-100 p-8 rounded-lg">
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-indigo-900 text-3xl mr-4 mt-1" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-4">
                Mesquite Welcome Center
              </h2>
              <p className="text-gray-600 mb-4">
                Discover brochures, maps, directions, and what&apos;s happening in Mesquite from friendly volunteers. 
                Clean restrooms on-site and plenty of parking for vehicles of all sizes.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-indigo-900 mb-2">Mesquite Welcome Center</p>
                <p className="text-gray-700">460 N. Sandhill Blvd.</p>
                <p className="text-gray-700">Mesquite, NV 89027</p>
                <p className="text-gray-700 mt-2">Hours: 10:00 am – 2:00 pm, Monday through Friday</p>
              </div>
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection
          title="What's Nearby in Mesquite"
          subtitle="See golf, healthcare, groceries, and parks around Mesquite Estates on an interactive map."
          className="mb-8 px-0"
        />

        {/* RealScout Office Listings */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Homes Available in Mesquite</h2>
          <p className="text-base text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Discover the perfect home in Mesquite, Nevada. Browse our current listings including custom lots, 
            single-family homes, golf course properties, and 55+ community homes. Contact Dr. Jan Duffy to 
            learn more about any property.
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
            Find Your Dream Home in Mesquite Estates
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Custom lots from $70K, homes $360K-$700K. Experience the perfect blend of natural beauty, 
            recreational opportunities, and small-town charm.
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
              Browse Properties
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
      <Newsletter />
      <Footer />
    </>
  );
}

