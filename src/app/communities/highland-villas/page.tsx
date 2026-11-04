"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";

import OfficeListings from "@/components/common/OfficeListings";
export default function HighlandVillas() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Highland Villas Homes for Sale
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Peaceful neighborhood offering comfortable living with easy access to shopping and entertainment in Mesquite, Nevada.
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
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src="https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw/cambria-single-story-home-street.jpg"
                alt="Highland Villas Community"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                About Highland Villas
              </h2>
              <p className="text-base text-gray-700 mb-4">
                Highland Villas is a peaceful residential community in Mesquite, Nevada, offering comfortable homes 
                in a quiet neighborhood setting. This community provides residents with convenient access to shopping, 
                dining, and entertainment while maintaining a relaxed, parks and community amenities.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Dr. Jan Duffy helps clients discover Highland Villas homes that offer the perfect balance of comfort, 
                convenience, and value. With her expertise in Mesquite real estate, she guides clients through the 
                process of finding homes that meet their specific needs and preferences in this welcoming community.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Find Your Highland Villas Home</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Let Dr. Jan Duffy help you find your perfect home in Highland Villas.
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
      </div>
      <Footer />
    </>
  );
}

