"use client";

import React from "react";
import Link from "next/link";

export default function QuickPriceSearch() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-32">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-8 text-center">
          Search by Price Range
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link
            href="/Mesquite_Homes_For_Sale?max_price=400000"
            className="bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md"
          >
            Under $400K
          </Link>
          <Link
            href="/Mesquite_Homes_For_Sale?min_price=400000&max_price=500000"
            className="bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md"
          >
            $400K - $500K
          </Link>
          <Link
            href="/Mesquite_Homes_For_Sale?min_price=500000&max_price=600000"
            className="bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md"
          >
            $500K - $600K
          </Link>
          <Link
            href="/Mesquite_Homes_For_Sale?min_price=600000"
            className="bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md"
          >
            $600K+
          </Link>
        </div>
        <div className="text-center">
          <Link
            href="/Mesquite_Homes_For_Sale?type=lot"
            className="text-indigo-900 font-semibold hover:text-indigo-700 transition duration-300 text-lg"
          >
            Custom Lots & Homesites →
          </Link>
        </div>
      </div>
    </section>
  );
}

