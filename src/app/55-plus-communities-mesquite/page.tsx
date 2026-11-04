"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";

import OfficeListings from "@/components/common/OfficeListings";
export default function FiftyFivePlusCommunities() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            55+ Communities in Mesquite, Nevada
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Discover active adult living in Mesquite&apos;s premier 55+ communities, featuring resort-style amenities, 
            championship golf, and vibrant social lifestyles perfect for retirees and active adults.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>
        <OfficeListings />

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                Active Adult Living in Mesquite
              </h2>
              <p className="text-base text-gray-700 mb-4">
                Mesquite, Nevada offers exceptional 55+ communities designed for active adults seeking a vibrant, 
                engaging lifestyle. These age-qualified communities provide resort-style amenities, championship golf, 
                fitness centers, pools, and numerous clubs and activities, all within a welcoming, social environment 
                perfect for retirement and active adult living.
              </p>
              <p className="text-base text-gray-700 mb-4">
                As a Mesquite realtor specializing in 55+ communities, Dr. Jan Duffy helps clients discover the perfect 
                active adult community that matches their lifestyle preferences. Whether you&apos;re seeking an active 
                social calendar, championship golf access, or a low-maintenance lifestyle, Mesquite&apos;s 55+ communities 
                offer diverse options for active adult living.
              </p>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4 mt-6">
                Benefits of 55+ Living in Mesquite
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 font-bold">•</span>
                  <span>Age-qualified environment focused on active adult lifestyles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 font-bold">•</span>
                  <span>Resort-style amenities including pools, fitness centers, and clubs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 font-bold">•</span>
                  <span>Championship golf course access within communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 font-bold">•</span>
                  <span>Low-maintenance homes perfect for active lifestyles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 font-bold">•</span>
                  <span>Vibrant social calendars with numerous clubs and activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 font-bold">•</span>
                  <span>300+ days of sunshine for year-round outdoor activities</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src="https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw/active-adult-clubhouse-pool.jpg"
                alt="55+ Community Living in Mesquite"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Featured 55+ Community</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <Image
                  src="https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw/ridgemont-single-story-home-sunset-view.jpg"
                  alt="Sun City Mesquite"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-indigo-900 mb-4">Sun City Mesquite</h3>
                <p className="text-gray-700 mb-4">
                  Nevada&apos;s premier 55+ active adult community by Del Webb, featuring 2,500+ homes, 18-hole 
                  Conestoga Golf Club, fitness center, pools, and over 100 clubs and activities.
                </p>
                <Link
                  href="/Sun_City_Mesquite"
                  className="inline-block bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
                >
                  Explore Sun City Mesquite →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Retire in Mesquite, Nevada</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Let Dr. Jan Duffy help you find the perfect 55+ community home in Mesquite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-718-2228"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg"
            >
              📞 Call/Text 702-718-2228
            </a>
            <Link
              href="/Contact_us"
              className="inline-block bg-white hover:bg-gray-100 text-indigo-900 font-semibold px-8 py-3 rounded-lg transition duration-300"
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

