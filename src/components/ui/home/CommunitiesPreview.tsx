"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const communities = [
  {
    name: "Sun City Mesquite",
    slug: "sun-city-mesquite",
    description: "55+ Active Adult Community by Del Webb",
    image: "/Image/hero_bg_1.jpg",
    featured: true,
  },
  {
    name: "Falcon Ridge",
    slug: "falcon-ridge",
    description: "Golf Course Living",
    image: "/Image/hero_bg_2.jpg",
    featured: false,
  },
  {
    name: "Mesquite Vistas",
    slug: "mesquite-vistas",
    description: "Scenic Desert Views",
    image: "/Image/hero_bg_3.jpg",
    featured: false,
  },
  {
    name: "Highland Villas",
    slug: "highland-villas",
    description: "Quiet Residential Streets",
    image: "/Image/hero_bg_1.jpg",
    featured: false,
  },
];

export default function CommunitiesPreview() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-32">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4 text-center">
          Mesquite Communities
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Discover the diverse neighborhoods and communities that make Mesquite a special place to call home.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community) => (
            <Link
              key={community.slug}
              href={community.slug === 'sun-city-mesquite' ? '/Sun_City_Mesquite' : `/communities/${community.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-48">
                <Image
                  src={community.image}
                  alt={community.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {community.featured && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">{community.name}</h3>
                <p className="text-gray-600 text-sm">{community.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/Sun_City_Mesquite"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg"
            >
              Explore Sun City Mesquite →
            </Link>
            <Link
              href="/communities"
              className="text-indigo-900 font-semibold hover:text-indigo-700 transition duration-300"
            >
              View All Communities →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

