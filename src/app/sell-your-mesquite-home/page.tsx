"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { FaCheckCircle, FaChartLine, FaHandshake, FaKey } from "react-icons/fa";

import OfficeListings from "@/components/common/OfficeListings";
export default function SellYourMesquiteHome() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Sell Your Mesquite Home
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Expert realtor services to help you sell your Mesquite home quickly and for the best possible price. 
            Dr. Jan Duffy provides comprehensive market analysis, professional marketing, and expert negotiation.
          </p>
        </section>
        <OfficeListings />

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Why Choose Dr. Jan Duffy to Sell Your Home</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaChartLine className="text-indigo-900 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Market Expertise</h3>
              <p className="text-gray-700">
                Comprehensive knowledge of Mesquite real estate market trends, property values, and pricing strategies 
                to maximize your home&apos;s sale price.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaHandshake className="text-indigo-900 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Professional Marketing</h3>
              <p className="text-gray-700">
                Strategic marketing campaigns including professional photography, virtual tours, listing on every major home search site, and 
                targeted advertising to reach qualified buyers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaKey className="text-indigo-900 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Expert Negotiation</h3>
              <p className="text-gray-700">
                Skilled negotiation to secure the best terms and price for your home sale, handling all aspects 
                of offers and counteroffers professionally.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaCheckCircle className="text-indigo-900 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Smooth Transactions</h3>
              <p className="text-gray-700">
                Complete transaction management from listing to closing, ensuring all paperwork, inspections, and 
                contingencies are handled efficiently.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">The Selling Process</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-indigo-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Home Valuation & Market Analysis</h3>
                <p className="text-gray-700">
                  Comprehensive property evaluation and market analysis to determine optimal listing price based on 
                  current market conditions, comparable sales, and your home&apos;s unique features.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Preparation & Staging</h3>
                <p className="text-gray-700">
                  Expert guidance on home preparation, repairs, and staging recommendations to showcase your home 
                  at its best and attract qualified buyers.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Marketing & Showings</h3>
                <p className="text-gray-700">
                  Professional marketing campaign including listing on every major home search site, professional photography, virtual tours, 
                  open houses, and targeted advertising to maximize buyer interest.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Negotiation & Contracts</h3>
                <p className="text-gray-700">
                  Expert negotiation of offers, terms, and contingencies to secure the best deal for you, with 
                  professional contract management throughout the process.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Closing & Beyond</h3>
                <p className="text-gray-700">
                  Complete transaction coordination through closing, handling inspections, appraisals, and all 
                  necessary paperwork to ensure a smooth and successful sale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Get Your Home&apos;s Value</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Mesquite Home?</h2>
          <p className="text-xl mb-6">
            Contact Dr. Jan Duffy for a free market analysis and professional selling consultation.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 mr-4"
          >
            Call/Text 702-718-2228
          </a>
          <a
            href="/Contact_us"
            className="inline-block bg-white hover:bg-gray-100 text-indigo-900 font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            Schedule Consultation
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
}

