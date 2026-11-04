"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { FaGolfBall, FaUtensils, FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

import OfficeListings from "@/components/common/OfficeListings";
export default function ConestogaGolfMesquite() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <FaGolfBall className="text-indigo-900 text-6xl" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Conestoga Golf Club | Sun City Mesquite
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Award-winning 18-hole championship golf course designed by Gary Panks, managed by Troon Golf. 
            Experience world-class golf in the heart of Sun City Mesquite.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>
        <OfficeListings />

        {/* Overview Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">About Conestoga Golf Club</h2>
            <p className="text-base text-gray-700 mb-4">
              Conestoga Golf Club opened in 2009 as the centerpiece of Sun City Mesquite, designed by renowned 
              golf course architect Gary Panks. Managed by Troon Golf, the world&apos;s premier golf management company, 
              Conestoga offers a championship golf experience that rivals any course in the Southwest.
            </p>
            <p className="text-base text-gray-700">
              The course seamlessly integrates with the natural desert landscape, featuring dramatic elevation changes, 
              stunning mesa backdrops, and challenging play that appeals to golfers of all skill levels.
            </p>
          </div>
        </section>

        {/* Course Details Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Course Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Course Specifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <FaGolfBall className="text-indigo-600 mr-3" />
                  <span><strong>18 holes</strong>, par 72 championship course</span>
                </li>
                <li className="flex items-center">
                  <FaGolfBall className="text-indigo-600 mr-3" />
                  <span><strong>7,204 yards</strong> from the tips</span>
                </li>
                <li className="flex items-center">
                  <FaGolfBall className="text-indigo-600 mr-3" />
                  <span><strong>1,000+ feet</strong> of elevation changes</span>
                </li>
                <li className="flex items-center">
                  <FaGolfBall className="text-indigo-600 mr-3" />
                  <span>Designed by <strong>Gary Panks</strong></span>
                </li>
                <li className="flex items-center">
                  <FaGolfBall className="text-indigo-600 mr-3" />
                  <span>Managed by <strong>Troon Golf</strong></span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Course Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Rock outcroppings & native desert plants</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Tranquil water elements</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Stunning mesa backdrops</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Challenging yet playable for all skill levels</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Immaculately maintained year-round</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Pro shop with golf equipment & apparel</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 1880 Grille Restaurant Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FaUtensils className="text-indigo-900 text-4xl mr-4" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">1880 Grille Restaurant & Sports Bar</h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            The 1880 Grille is Conestoga Golf Club&apos;s on-site restaurant and sports bar, offering excellent 
            dining in a relaxed, welcoming atmosphere. Whether you&apos;re finishing a round of golf or just stopping 
            by for lunch or dinner, the 1880 Grille provides great food and friendly service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Signature Items</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 1880 Burger - A fan favorite</li>
                <li>• 1880 Lager - Craft beer specialty</li>
                <li>• Fresh salads and sandwiches</li>
                <li>• Hearty entrees</li>
                <li>• Appetizers and shareable plates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Dining Experience</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Casual, relaxed atmosphere</li>
                <li>• Indoor and outdoor seating</li>
                <li>• Full bar service</li>
                <li>• Perfect for post-round gatherings</li>
                <li>• Open to public (residents get priority)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resident Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Sun City Mesquite Resident Benefits</h2>
          <div className="bg-indigo-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">Golf Privileges</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Discounted golf rates</strong> - Save on green fees</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Preferred tee times</strong> - Book 7 days in advance</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Priority access</strong> - Residents get first choice</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Golf cart storage</strong> - Many homes feature golf cart garages</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">Membership Options</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Various membership packages available</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Flexible play options</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Guest privileges available</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Tournament participation opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-indigo-900 text-4xl mr-4" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">Location & Contact</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Conestoga Golf Club</strong><br />
              Located within Sun City Mesquite<br />
              1350 Flat Top Mesa Drive<br />
              Mesquite, NV 89034
            </p>
            <p className="text-gray-700">
              For tee times, membership information, or restaurant reservations, contact the Conestoga Golf Club 
              directly or stop by the pro shop. Sun City Mesquite residents enjoy priority booking and special rates.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-12 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Play Championship Golf at Conestoga
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Experience world-class golf in the heart of Sun City Mesquite. Contact Dr. Jan Duffy to learn 
            more about homes near Conestoga Golf Club or to schedule a round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link
              href="/Golf_Homes_Mesquite"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
            >
              View Golf Homes
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

