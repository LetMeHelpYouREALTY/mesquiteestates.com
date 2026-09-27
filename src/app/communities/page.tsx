"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import NearbyAmenitiesSection from "@/components/amenities/NearbyAmenitiesSection";

const communities = [
  {
    name: "Sun City Mesquite",
    slug: "sun-city-mesquite",
    description: "Nevada's premier 55+ active adult community by Del Webb, featuring resort-style amenities, championship golf, and an active lifestyle.",
    image: "/Image/hero_bg_1.jpg",
    featured: true,
    amenities: ["18-hole Golf Course", "Fitness Center", "Pools", "100+ Clubs"],
  },
  {
    name: "Falcon Ridge",
    slug: "falcon-ridge",
    description: "Beautiful golf course community offering luxury homes with stunning views and direct access to championship golf.",
    image: "/Image/hero_bg_2.jpg",
    featured: false,
    amenities: ["Golf Course Access", "Mountain Views", "Resort Amenities"],
  },
  {
    name: "Mesquite Vistas",
    slug: "mesquite-vistas",
    description: "Family-friendly community with scenic desert vistas and convenient access to Mesquite amenities.",
    image: "/Image/hero_bg_3.jpg",
    featured: false,
    amenities: ["Desert Views", "Family-Friendly", "Parks & Recreation"],
  },
  {
    name: "Highland Villas",
    slug: "highland-villas",
    description: "Peaceful neighborhood offering comfortable living with easy access to shopping and entertainment.",
    image: "/Image/hero_bg_1.jpg",
    featured: false,
    amenities: ["Quiet Neighborhood", "Easy Access", "Community Pool"],
  },
];

export default function CommunitiesPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Mesquite Communities
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Explore the diverse neighborhoods and communities that make Mesquite, Nevada a special place to call home. 
            From 55+ active adult communities to golf course living, find the perfect community for your lifestyle.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {communities.map((community) => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-64">
                <Image
                  src={community.image}
                  alt={community.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {community.featured && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured Community
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-2">{community.name}</h2>
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="flex flex-wrap gap-2">
                  {community.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-900 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <NearbyAmenitiesSection className="mb-16 px-0" />

        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Find Your Perfect Mesquite Community
          </h2>
          <p className="text-indigo-100 mb-6 text-lg">
            Let Dr. Jan Duffy help you discover the Mesquite community that&apos;s right for you.
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

