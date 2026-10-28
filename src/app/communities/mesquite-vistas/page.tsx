"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";

export default function MesquiteVistas() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Mesquite Vistas Homes for Sale
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Residential community with scenic desert vistas and convenient access to Mesquite amenities in the Virgin River Valley.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                About Mesquite Vistas
              </h2>
              <p className="text-base text-gray-700 mb-4">
                Mesquite Vistas offers beautiful homes with stunning desert views close to parks and shopping. 
                This welcoming community provides residents with easy access to Mesquite&apos;s amenities, schools, 
                and recreational opportunities, making it an ideal choice for families and those seeking a peaceful 
                lifestyle with scenic surroundings.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Dr. Jan Duffy specializes in helping clients find the perfect Mesquite Vistas home that matches 
                their family&apos;s needs and lifestyle. With expertise in Mesquite real estate, she provides 
                comprehensive guidance to ensure clients find properties that offer both comfort and value in 
                this desirable community.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src="/Image/hero_bg_3.jpg"
                alt="Mesquite Vistas Community"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Mesquite Vistas Homes for Sale</h2>
          <div className="w-full">
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="NEWEST" 
              listing-status="For Sale"
            ></realscout-office-listings>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Find Your Mesquite Vistas Home</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Contact Dr. Jan Duffy to explore homes in Mesquite Vistas.
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

