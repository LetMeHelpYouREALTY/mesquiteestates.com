"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { FaHome, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

import OfficeListings from "@/components/common/OfficeListings";
export default function SunCityMesquiteFloorPlans() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Sun City Mesquite Floor Plans & Home Designs
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            As of October 12, 2026, Del Webb listed three single-story series, Cottage, Retreat and Encore, from 1,285 to 2,731 sq ft. Base prices exclude lot premiums and options.
            All homes are single-story ranch designs with 2-car garages, perfect for active adult living.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>
        <OfficeListings />

        {/* Cottage Series */}
        <section className="mb-16">
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">Cottage Series</h2>
            <p className="text-xl font-semibold text-indigo-600 mb-4">From $349,990</p>
            <p className="text-base text-gray-700 mb-4">
              Perfect starter homes in Sun City Mesquite, offering comfortable living spaces with efficient designs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Canyon</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-700">
                  <FaRulerCombined className="text-indigo-600 mr-3" />
                  <span><strong>1,285+ sq ft</strong></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBed className="text-indigo-600 mr-3" />
                  <span><strong>2 bedrooms</strong></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBath className="text-indigo-600 mr-3" />
                  <span><strong>2 bathrooms</strong></span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                The Canyon model features an open floor plan perfect for entertaining, with a spacious great room 
                and convenient single-story living.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Pine Spring</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-700">
                  <FaRulerCombined className="text-indigo-600 mr-3" />
                  <span><strong>1,420+ sq ft</strong></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBed className="text-indigo-600 mr-3" />
                  <span><strong>2 bedrooms</strong></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBath className="text-indigo-600 mr-3" />
                  <span><strong>2 bathrooms</strong></span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                The Pine Spring offers slightly more space with a thoughtful layout that maximizes living areas 
                and storage.
              </p>
            </div>
          </div>
        </section>

        {/* Retreat Series */}
        <section className="mb-16">
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">Retreat Series</h2>
            <p className="text-xl font-semibold text-indigo-600 mb-4">From $429,990</p>
            <p className="text-base text-gray-700 mb-4">
              Spacious homes with upgraded features and enhanced living spaces for comfortable retirement living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Hideaway</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-700">
                  <FaRulerCombined className="text-indigo-600 mr-3" />
                  <span><strong>1,573+ sq ft</strong></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBed className="text-indigo-600 mr-3" />
                  <span><strong>2 bedrooms</strong></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBath className="text-indigo-600 mr-3" />
                  <span><strong>2 bathrooms</strong></span>
                </div>
              </div>
              <p className="text-gray-700">
                The Hideaway model provides comfortable living with upgraded features and spacious rooms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Bellwood</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-700">
                  <FaRulerCombined className="text-indigo-600 mr-3" />
                  <span><strong>1,865+ sq ft</strong></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBed className="text-indigo-600 mr-3" />
                  <span><strong>2 bedrooms</strong></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBath className="text-indigo-600 mr-3" />
                  <span><strong>2 bathrooms</strong></span>
                </div>
              </div>
              <p className="text-gray-700">
                The Bellwood offers expanded living spaces with enhanced features and storage options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Preserve</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-700">
                  <FaRulerCombined className="text-indigo-600 mr-3" />
                  <span><strong>2,010+ sq ft</strong></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBed className="text-indigo-600 mr-3" />
                  <span><strong>2 bedrooms</strong></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBath className="text-indigo-600 mr-3" />
                  <span><strong>2 bathrooms</strong></span>
                </div>
              </div>
              <p className="text-gray-700">
                The Preserve model provides generous living spaces with premium features and finishes.
              </p>
            </div>
          </div>
        </section>

        {/* Encore Series */}
        <section className="mb-16">
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">Encore Series</h2>
            <p className="text-xl font-semibold text-indigo-600 mb-4">From $491,990</p>
            <p className="text-base text-gray-700 mb-4">
              Premium homes with luxury features, spacious layouts, and upscale finishes for discerning buyers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Voyage</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-gray-700">
                <FaRulerCombined className="text-indigo-600 mr-3" />
                <span><strong>2,731+ sq ft</strong></span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaBed className="text-indigo-600 mr-3" />
                <span><strong>3 bedrooms</strong></span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaBath className="text-indigo-600 mr-3" />
                <span><strong>2.5 bathrooms</strong></span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              The Voyage model represents the pinnacle of Sun City Mesquite living with expansive square footage, 
              premium features, and luxurious finishes. Perfect for those who want space for guests or a home office.
            </p>
          </div>
        </section>

        {/* Common Features */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Standard Features Across All Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Design Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Single-story ranch designs</li>
                <li>• 2-car garages</li>
                <li>• Golf cart storage options</li>
                <li>• Open floor plans</li>
                <li>• Energy-efficient construction</li>
                <li>• Indoor-outdoor living flow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Interior Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Granite countertops available</li>
                <li>• Smart home technology options</li>
                <li>• Low-maintenance finishes</li>
                <li>• Spacious master suites</li>
                <li>• Walk-in closets</li>
                <li>• Modern appliance packages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-12 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            View Floor Plans in Person
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Visit the Del Webb models at Sun City Mesquite to see these beautiful floor plans firsthand. 
            Contact Dr. Jan Duffy to schedule your tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a
              href="tel:702-718-2228"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              📞 Call/Text 702-718-2228
            </a>
            <Link
              href="/Sun_City_Mesquite"
              className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Back to Sun City Mesquite
            </Link>
            <a
              href="https://calendly.com/drjanduffy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
            >
              Book a Time
            </a>
          </div>
          <p className="text-indigo-100 text-lg">
            Models open daily 9AM-5PM<br />
            1300 Flat Top Mesa Dr, Mesquite, NV 89034
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

