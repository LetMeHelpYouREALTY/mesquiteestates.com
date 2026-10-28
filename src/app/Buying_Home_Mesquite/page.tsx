"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { FaHome, FaCheckCircle, FaMapMarkerAlt, FaHandshake, FaKey } from "react-icons/fa";

export default function BuyingHomeMesquite() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* H1 - Only One */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Complete Guide to Buying a Home in Mesquite, Nevada | Dr. Jan Duffy Realtor Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Your comprehensive guide to buying a home in Mesquite, Nevada with Dr. Jan Duffy, your trusted Mesquite realtor. 
            Learn about the home buying process, market insights, and why Mesquite is the perfect place to purchase your dream home.
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
            <FaHome className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Why Buy a Home in Mesquite, Nevada?
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Buying a home in Mesquite, Nevada offers exceptional opportunities for those seeking a unique combination of 
            natural beauty, recreational amenities, and affordable real estate in a desirable location. As your dedicated 
            Mesquite realtor, Dr. Jan Duffy helps clients understand why purchasing a home in Mesquite represents an excellent 
            investment in both lifestyle and property value. The Mesquite real estate market provides diverse options for home 
            buyers, from starter homes to luxury properties, all within a welcoming community atmosphere.
          </p>
          <p className="text-base text-gray-700 mb-4">
            When considering buying a home in Mesquite, you&apos;ll discover that this desert community offers more than just 
            affordable housing. Mesquite homes provide access to world-class golf courses, resort amenities, and stunning 
            desert landscapes that create an unparalleled living environment. The combination of small-town charm, proximity 
            to Las Vegas, and abundant recreational opportunities makes Mesquite an ideal location for buying a home.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Dr. Jan Duffy, an experienced Mesquite realtor in real estate since 1983, specializes in helping clients navigate 
            the process of buying a home in Mesquite. Her expertise includes market analysis, property evaluation, and guidance 
            through the entire home purchase process. Whether you&apos;re a first-time homebuyer or an experienced real estate investor, 
            her professional realtor services ensure you make informed decisions when buying a home in Mesquite.
          </p>
          
          {/* H3 Subsection */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
              Advantages of Buying a Home in Mesquite
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Buying a home in Mesquite offers numerous advantages that make this desert community an attractive destination 
              for homebuyers. The Mesquite real estate market provides exceptional value, with homes ranging from $360K to 
              $700K and custom lots starting at $70K. This affordability, combined with the area&apos;s natural beauty and amenities, 
              creates an ideal environment for buying a home that offers both lifestyle benefits and investment potential.
            </p>
            <p className="text-base text-gray-700">
              When buying a home in Mesquite, you gain access to seven championship golf courses, resort facilities, and a 
              friendly community atmosphere. The area&apos;s proximity to national parks, Las Vegas entertainment, and outdoor 
              recreation opportunities adds significant value to homeownership in Mesquite. As a Mesquite realtor, Dr. Jan Duffy 
              helps clients understand these advantages and identify properties that best match their needs and preferences.
            </p>
          </div>
        </section>

        {/* H2 Section 2 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaCheckCircle className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  The Home Buying Process in Mesquite
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                Buying a home in Mesquite involves several important steps that require professional guidance and expertise. 
                Dr. Jan Duffy provides comprehensive realtor services throughout the home buying process, ensuring clients 
                have the support needed for successful transactions. From initial property search to closing, her expertise 
                as a Mesquite realtor helps streamline the process of buying a home in this desirable location.
              </p>
              <p className="text-base text-gray-700 mb-4">
                The first step in buying a home in Mesquite involves understanding your needs, preferences, and budget. 
                Dr. Jan Duffy works closely with clients to identify their priorities, whether seeking golf course homes, 
                family residences, or investment properties. This initial consultation ensures that the home search process 
                focuses on properties that match specific criteria, making buying a home in Mesquite efficient and effective.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Working with a Mesquite Realtor for Home Buying
              </h3>
              <p className="text-base text-gray-700">
                Partnering with an experienced Mesquite realtor like Dr. Jan Duffy is essential when buying a home in Mesquite. 
                Her realtor services include market knowledge, property evaluation, negotiation expertise, and transaction 
                coordination. This professional support ensures that clients buying a home in Mesquite have access to the 
                information and guidance needed to make confident purchasing decisions.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2">
              <Image
                src="/Image/hero_bg_1.jpg"
                alt="Buying a home in Mesquite, Nevada"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* H2 Section 3 */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Finding the Right Home in Mesquite
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Finding the right home when buying a home in Mesquite requires careful consideration of location, property features, 
            and lifestyle preferences. Mesquite offers diverse neighborhoods and property types, from golf course communities 
            to quiet residential areas. Dr. Jan Duffy&apos;s expertise as a Mesquite realtor includes comprehensive knowledge of 
            neighborhoods throughout Mesquite, helping clients identify areas that best match their needs when buying a home.
          </p>
          <p className="text-base text-gray-700 mb-4">
            When buying a home in Mesquite, buyers often consider factors such as proximity to golf courses, resort amenities, 
            schools, and outdoor recreation. The Mesquite real estate market offers options that cater to various preferences, 
            ensuring that clients can find homes that align with their lifestyle goals. As a Mesquite realtor, Dr. Jan Duffy 
            helps clients evaluate these factors and identify properties that offer the best combination of features and value.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            Golf Course Homes in Mesquite
          </h3>
          <p className="text-base text-gray-700 mb-4">
            Many buyers purchasing a home in Mesquite specifically seek golf course properties that offer convenient access to 
            championship golf and stunning course views. These golf homes in Mesquite represent premium options in the real estate 
            market, providing both recreational opportunities and luxury living. Dr. Jan Duffy specializes in helping clients 
            find golf course homes when buying a home in Mesquite, ensuring they access the best available properties in this 
            specialized market segment.
          </p>
          <p className="text-base text-gray-700">
            Buying a home in Mesquite on or near a golf course offers year-round golfing opportunities thanks to the area&apos;s 
            excellent climate. These properties often feature upgraded finishes, outdoor living spaces, and direct course access, 
            making them highly desirable among golf enthusiasts. As a Mesquite realtor with expertise in golf course properties, 
            Dr. Jan Duffy helps clients navigate this specialized market when buying a home in Mesquite.
          </p>
        </section>

        {/* H2 Section 4 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:order-1">
              <Image
                src="/Image/hero_bg_2.jpg"
                alt="Mesquite real estate investment opportunities"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="lg:order-2 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaKey className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Financing Your Home Purchase in Mesquite
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                Financing is a crucial aspect of buying a home in Mesquite, and understanding your options ensures a smooth 
                purchase process. Dr. Jan Duffy works with clients to help them understand financing options available for 
                purchasing Mesquite homes, connecting them with trusted lenders who understand the Mesquite real estate market. 
                Her realtor services include guidance on mortgage programs, down payment requirements, and financing strategies 
                that make buying a home in Mesquite accessible.
              </p>
              <p className="text-base text-gray-700 mb-4">
                When buying a home in Mesquite, various financing options are available, including conventional loans, FHA loans, 
                and VA loans for qualified buyers. The affordability of Mesquite homes, with prices ranging from $360K to $700K, 
                makes homeownership achievable for many buyers. Dr. Jan Duffy&apos;s expertise as a Mesquite realtor includes knowledge 
                of financing options that help clients successfully complete their home purchases in Mesquite.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Investment Properties in Mesquite
              </h3>
              <p className="text-base text-gray-700">
                Buying a home in Mesquite as an investment property offers opportunities for rental income and property appreciation. 
                The area&apos;s growing reputation as a vacation destination and retirement community creates strong rental demand, 
                particularly for golf course homes and properties near resort amenities. Dr. Jan Duffy&apos;s realtor services include 
                investment analysis that helps clients evaluate the potential returns when buying a home in Mesquite for investment 
                purposes.
              </p>
            </div>
          </div>
        </section>

        {/* H2 Section 5 */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaHandshake className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Working with Dr. Jan Duffy: Your Mesquite Realtor
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Dr. Jan Duffy is your trusted Mesquite realtor specializing in helping clients successfully complete the process of 
            buying a home in Mesquite. With extensive knowledge of Mesquite real estate, market trends, and neighborhood 
            characteristics, she provides expert guidance that ensures clients make informed decisions when purchasing homes in 
            this desirable desert community. Her commitment to client satisfaction and professional realtor services makes her the 
            ideal partner for buying a home in Mesquite.
          </p>
          <p className="text-base text-gray-700 mb-4">
            As a Mesquite realtor, Dr. Jan Duffy offers comprehensive services to homebuyers. 
            Her realtor services include property search assistance, market analysis, property evaluation, offer preparation, 
            negotiation, and transaction coordination. This full-service approach ensures that clients buying a home in Mesquite 
            receive professional representation throughout the entire purchase process.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            Why Choose Dr. Jan Duffy as Your Mesquite Realtor?
          </h3>
          <p className="text-base text-gray-700 mb-4">
            Choosing Dr. Jan Duffy as your Mesquite realtor when buying a home in Mesquite provides access to expert knowledge 
            and professional service. Her understanding of Mesquite real estate trends, property values, and neighborhood 
            characteristics ensures clients receive accurate information that guides their home buying decisions. This expertise, 
            combined with her commitment to client satisfaction, creates a superior home buying experience.
          </p>
          <p className="text-base text-gray-700">
            Dr. Jan Duffy&apos;s realtor services are specifically tailored to the Mesquite market, ensuring clients buying a home 
            in Mesquite have access to the most current market information and best available properties. Her professional 
            approach, attention to detail, and dedication to client success make her the preferred choice for homebuyers seeking 
            to purchase homes in this premier desert destination.
          </p>
        </section>

        {/* RealScout Office Listings */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Available Homes in Mesquite</h2>
          <p className="text-base text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Browse our current selection of homes, lots, and properties available in Mesquite. From starter homes 
            to luxury estates, custom lots to golf course properties, explore what&apos;s on the market today.
          </p>
          <div className="w-full">
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="NEWEST" 
              listing-status="For Sale"
            ></realscout-office-listings>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Your Journey to Buying a Home in Mesquite
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Contact Dr. Jan Duffy, your trusted Mesquite realtor, to begin the process of buying your dream home. 
            Explore available properties and discover why Mesquite is the perfect place to call home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-718-2228"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              📞 Call/Text 702-718-2228
            </a>
            <Link
              href="/Mesquite_Homes_For_Sale#listings"
              className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              View Available Homes
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

