"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";

import OfficeListings from "@/components/common/OfficeListings";
export default function SunCityMesquite() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* Hero Section */}
        <section className="relative mb-16 rounded-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src="https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw/active-adult-clubhouse-pool.jpg"
              alt="Sun City Mesquite 55+ Community"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Sun City Mesquite Homes for Sale
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Nevada&apos;s Premier 55+ Active Adult Community by Del Webb
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:702-718-2228"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
                >
                  Call/Text 702-718-2228
                </a>
                <Link
                  href="/Sun_City_Mesquite"
                  className="bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
                >
                  View Comprehensive Guide →
                </Link>
              </div>
            </div>
          </div>
        </section>
        <OfficeListings />

        {/* Link to Comprehensive Page */}
        <section className="mb-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Explore Our Comprehensive Sun City Mesquite Guide</h2>
          <p className="mb-4 text-indigo-100">
            For detailed information about floor plans, amenities, golf, and more, visit our comprehensive guide.
          </p>
          <Link
            href="/Sun_City_Mesquite"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            View Complete Sun City Mesquite Guide →
          </Link>
        </section>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">About Sun City Mesquite</h2>
          <p className="text-base text-gray-700 mb-4">
            Sun City Mesquite is a Del Webb 55+ active adult community offering resort-style living in the beautiful 
            Virgin River Valley. Residents enjoy world-class amenities, championship golf, and a welcoming community 
            atmosphere. This premier community represents one of Mesquite&apos;s most desirable destinations for active 
            adults seeking an engaging lifestyle filled with recreation, social opportunities, and relaxation.
          </p>
          <p className="text-base text-gray-700 mb-6">
            As a Mesquite realtor specializing in 55+ communities, Dr. Jan Duffy helps clients discover the perfect 
            Sun City Mesquite home that matches their lifestyle preferences. Whether you&apos;re seeking a low-maintenance 
            single-family home or a spacious villa, Sun City Mesquite offers diverse housing options within a vibrant, 
            active community setting. Explore our <Link href="/Sun_City_Mesquite_Floor_Plans" className="text-indigo-900 hover:text-indigo-600 underline font-semibold">floor plans</Link> and 
            comprehensive <Link href="/Sun_City_Mesquite_Amenities" className="text-indigo-900 hover:text-indigo-600 underline font-semibold">amenities guide</Link> to learn more.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-indigo-900 mb-2">2,500+</div>
              <div className="text-gray-700">Homes</div>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-indigo-900 mb-2">55+</div>
              <div className="text-gray-700">Age Qualified</div>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-indigo-900 mb-2">18</div>
              <div className="text-gray-700">Holes of Golf</div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Community Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span><Link href="/Conestoga_Golf_Mesquite" className="text-indigo-900 hover:text-indigo-600 underline">Conestoga Golf Club (18 holes)</Link></span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>Sun City Fitness Center</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>Indoor & Outdoor Pools</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>Tennis & Pickleball Courts</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>100+ Clubs & Activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>Walking Trails</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>Community Center</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>Restaurant & Dining</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg text-center mb-16 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Find Your Sun City Mesquite Home</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Let Dr. Jan Duffy help you find the perfect home in Sun City Mesquite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-718-2228"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg"
            >
              📞 Call/Text 702-718-2228
            </a>
            <a
              href="https://calendly.com/drjanduffy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-100 text-indigo-900 font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              Book a Time
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Sun City Mesquite FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                What is the age requirement for Sun City Mesquite?
              </h3>
              <p className="text-gray-700">
                Sun City Mesquite is a 55+ community. At least one resident must be 55 or older, and no permanent 
                residents under 19 are permitted. This age-qualified environment ensures a community focused on active 
                adult lifestyles and interests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                What are the HOA fees in Sun City Mesquite?
              </h3>
              <p className="text-gray-700">
                HOA fees vary but typically range from $150-$250/month, covering common area maintenance, amenities access, 
                and community services. These fees provide access to the fitness center, pools, golf course, and numerous 
                clubs and activities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                Does Sun City Mesquite have golf?
              </h3>
              <p className="text-gray-700">
                Yes! The community features Conestoga Golf Club, an 18-hole championship course designed for residents. 
                Golf enthusiasts can enjoy convenient access to this beautiful course right within the community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                What types of homes are available in Sun City Mesquite?
              </h3>
              <p className="text-gray-700">
                Sun City Mesquite offers a variety of home styles including single-family homes, villas, and patio homes. 
                Most homes feature low-maintenance designs perfect for active adult living, with prices typically ranging 
                from the $300Ks to $600Ks depending on size and location within the community.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

