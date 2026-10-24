"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { FaHandshake, FaHome, FaKey, FaChartLine, FaCheckCircle } from "react-icons/fa";

export default function MesquiteRealtorServices() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* H1 - Only One */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Professional Mesquite Realtor Services | Dr. Jan Duffy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Expert Mesquite realtor services from Dr. Jan Duffy, your trusted real estate professional in Mesquite, Nevada. 
            Comprehensive realtor services for buying and selling homes, golf course properties, and custom lots in the Virgin River Valley.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>

        {/* H2 Section 1 */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaHandshake className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Comprehensive Mesquite Realtor Services from Dr. Jan Duffy
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Dr. Jan Duffy provides comprehensive Mesquite realtor services to clients seeking expert guidance in the Mesquite 
            real estate market. As a trusted Mesquite realtor in real estate since 1983, she offers professional realtor services 
            that encompass all aspects of buying and selling homes in this premier desert destination. Her Mesquite realtor services 
            combine extensive market knowledge, negotiation expertise, and personalized attention to ensure successful real estate 
            transactions.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Mesquite realtor services from Dr. Jan Duffy are specifically designed to meet the unique needs of the Mesquite market. 
            Whether you&apos;re buying your first home in Mesquite, investing in golf course properties, or selling a residence, her 
            professional realtor services provide the expertise and support needed for successful transactions. The comprehensive 
            nature of these Mesquite realtor services ensures clients receive complete representation throughout their real estate journey.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The Mesquite real estate market requires specialized knowledge that only an experienced Mesquite realtor can provide. 
            Dr. Jan Duffy&apos;s Mesquite realtor services include deep understanding of local neighborhoods, property values, market 
            trends, and the unique characteristics that make Mesquite homes desirable. This expertise ensures that clients receive 
            accurate information and expert guidance when working with Mesquite realtor services.
          </p>
          
          {/* H3 Subsection */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
              Why Choose Professional Mesquite Realtor Services?
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Professional Mesquite realtor services provide essential expertise that simplifies the complex process of buying or 
              selling real estate in Mesquite. Dr. Jan Duffy&apos;s Mesquite realtor services offer market insights, property evaluation, 
              negotiation skills, and transaction coordination that ensure successful outcomes. Working with an experienced Mesquite 
              realtor like Dr. Jan Duffy provides access to professional realtor services that protect your interests and maximize 
              your real estate investment.
            </p>
            <p className="text-base text-gray-700">
              Mesquite realtor services from Dr. Jan Duffy include comprehensive support throughout your real estate transaction. 
              From initial consultation to closing, her professional realtor services ensure you have the guidance and expertise 
              needed to make informed decisions. This full-service approach distinguishes quality Mesquite realtor services from 
              basic listing or search assistance.
            </p>
          </div>
        </section>

        {/* H2 Section 2 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaHome className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Home Buying Realtor Services in Mesquite
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                Dr. Jan Duffy&apos;s Mesquite realtor services for home buyers include comprehensive property search assistance, market 
                analysis, and expert negotiation. Her professional realtor services help clients identify Mesquite homes that match 
                their needs, preferences, and budget. Whether seeking golf course homes, family residences, or investment properties, 
                her Mesquite realtor services provide the expertise needed to find the perfect property.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Home buying realtor services in Mesquite require specialized knowledge of local neighborhoods, property values, and 
                market conditions. Dr. Jan Duffy&apos;s Mesquite realtor services include detailed property evaluation, comparative market 
                analysis, and expert advice that helps clients make informed purchasing decisions. These professional realtor services 
                ensure buyers receive maximum value when purchasing Mesquite homes.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Property Search and Evaluation Services
              </h3>
              <p className="text-base text-gray-700">
                Dr. Jan Duffy&apos;s Mesquite realtor services include comprehensive property search capabilities that help buyers 
                efficiently identify suitable Mesquite homes. Her realtor services provide access to extensive property databases, 
                market information, and neighborhood insights that streamline the home search process. These professional realtor 
                services save time and ensure buyers consider all available options in the Mesquite real estate market.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2">
              <Image
                src="/Image/hero_bg_1.jpg"
                alt="Mesquite realtor services for home buyers"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* H2 Section 3 */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FaKey className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Home Selling Realtor Services in Mesquite
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Selling a home in Mesquite requires professional realtor services that maximize property value and ensure efficient 
            transactions. Dr. Jan Duffy&apos;s Mesquite realtor services for sellers include property valuation, marketing strategies, 
            and expert negotiation that achieve optimal sales results. Her professional realtor services help homeowners successfully 
            sell their Mesquite homes while minimizing stress and maximizing returns.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The Mesquite real estate market benefits from professional realtor services that understand local market dynamics and 
            buyer preferences. Dr. Jan Duffy&apos;s Mesquite realtor services include comprehensive marketing programs, professional 
            photography, staging advice, and strategic pricing that attract qualified buyers. These realtor services ensure Mesquite 
            homes receive maximum exposure and achieve competitive sale prices.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            Marketing and Pricing Realtor Services
          </h3>
          <p className="text-base text-gray-700 mb-4">
            Effective marketing is essential when selling Mesquite homes, and Dr. Jan Duffy&apos;s realtor services include comprehensive 
            marketing strategies designed for the Mesquite market. Her professional realtor services utilize multiple marketing 
            channels, including online listings, social media, and traditional advertising, ensuring Mesquite homes reach the widest 
            possible audience of potential buyers.
          </p>
          <p className="text-base text-gray-700">
            Pricing strategy is a critical component of successful home sales, and Dr. Jan Duffy&apos;s Mesquite realtor services include 
            detailed market analysis that determines optimal listing prices. Her realtor services consider factors such as comparable 
            sales, market conditions, and property features to establish pricing that attracts buyers while maximizing seller returns. 
            This expertise is essential for successful real estate transactions in Mesquite.
          </p>
        </section>

        {/* H2 Section 4 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:order-1">
              <Image
                src="/Image/hero_bg_3.jpg"
                alt="Golf course property realtor services in Mesquite"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="lg:order-2 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaChartLine className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Golf Course Property Realtor Services
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                Golf course properties represent a specialized segment of the Mesquite real estate market, requiring expert realtor 
                services that understand the unique features and considerations of these properties. Dr. Jan Duffy&apos;s Mesquite realtor 
                services include specialized expertise in golf course homes, helping buyers and sellers navigate this premium market 
                segment. Her professional realtor services ensure clients receive expert guidance when dealing with golf course 
                properties in Mesquite.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Golf course realtor services in Mesquite require knowledge of course access, views, restrictions, and property values 
                specific to golf communities. Dr. Jan Duffy&apos;s Mesquite realtor services include comprehensive understanding of Mesquite&apos;s 
                seven championship golf courses and the properties surrounding them. This expertise ensures that clients receive accurate 
                information and expert advice when buying or selling golf course homes in Mesquite.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Custom Lot Realtor Services in Mesquite
              </h3>
              <p className="text-base text-gray-700">
                Custom lot sales require specialized realtor services that understand lot characteristics, building restrictions, and 
                development potential. Dr. Jan Duffy&apos;s Mesquite realtor services include expertise in custom lots, helping clients 
                identify the best properties for their building projects. Her professional realtor services provide guidance on lot 
                selection, utility availability, and building requirements that ensure successful custom home projects in Mesquite.
              </p>
            </div>
          </div>
        </section>

        {/* H2 Section 5 */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaCheckCircle className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Why Choose Dr. Jan Duffy&apos;s Mesquite Realtor Services?
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Dr. Jan Duffy&apos;s Mesquite realtor services stand out in the Mesquite real estate market due to her extensive knowledge, 
            professional expertise, and commitment to client satisfaction. Her comprehensive realtor services provide clients with 
            the support and guidance needed for successful real estate transactions. Whether buying or selling Mesquite homes, her 
            professional realtor services ensure clients receive expert representation throughout their real estate journey.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The quality of Mesquite realtor services depends on market knowledge, negotiation skills, and professional experience. 
            Dr. Jan Duffy&apos;s realtor services combine these essential elements, providing clients with comprehensive support that 
            achieves optimal results. Her understanding of Mesquite real estate trends, property values, and market dynamics ensures 
            clients receive accurate information and expert advice.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            Comprehensive Realtor Services with Dr. Jan Duffy
          </h3>
          <p className="text-base text-gray-700 mb-4">
            As a Mesquite realtor in real estate since 1983, Dr. Jan Duffy provides clients with access to extensive property
            databases, marketing tools, and industry connections that enhance the real estate experience, so her Mesquite realtor
            services meet the highest professional standards.
          </p>
          <p className="text-base text-gray-700">
            Professional realtor services in Mesquite require ongoing education, market awareness, and commitment to excellence. 
            Dr. Jan Duffy&apos;s Mesquite realtor services reflect these professional standards, ensuring clients receive representation 
            that meets their needs and exceeds their expectations. Her dedication to providing quality realtor services makes her 
            the preferred choice for clients seeking expert real estate representation in Mesquite.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience Professional Mesquite Realtor Services Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Contact Dr. Jan Duffy to learn more about comprehensive realtor services for buying or selling homes in Mesquite, Nevada. 
            Professional expertise and personalized service await.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-718-2228"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              📞 Call/Text 702-718-2228
            </a>
            <Link
              href="/Services"
              className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              View All Services
            </Link>
            <Link
              href="/Contact_us"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
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

