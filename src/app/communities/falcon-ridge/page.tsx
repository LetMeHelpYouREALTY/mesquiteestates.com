"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";

import OfficeListings from "@/components/common/OfficeListings";
export default function FalconRidge() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Falcon Ridge Homes for Sale
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Beautiful golf course community offering luxury homes with stunning views and direct access to championship golf in Mesquite, Nevada.
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
                src="https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw/golf-course-home-backyard.jpg"
                alt="Falcon Ridge Community"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                About Falcon Ridge
              </h2>
              <p className="text-base text-gray-700 mb-4">
                Falcon Ridge is a premier golf course community in Mesquite, Nevada, offering luxury homes with 
                stunning mountain and golf course views. This desirable community provides residents with direct 
                access to championship golf and resort-style amenities, making it an ideal choice for golf 
                enthusiasts and those seeking an upscale lifestyle in the Virgin River Valley.
              </p>
              <p className="text-base text-gray-700 mb-4">
                As a Mesquite realtor specializing in golf course properties, Dr. Jan Duffy helps clients discover 
                the perfect Falcon Ridge home that combines luxury living with exceptional golf access. Whether 
                you&apos;re seeking a primary residence or vacation home, Falcon Ridge offers a distinctive lifestyle 
                in one of Mesquite&apos;s most sought-after communities.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Find Your Falcon Ridge Home</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Let Dr. Jan Duffy help you find the perfect golf course home in Falcon Ridge.
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

