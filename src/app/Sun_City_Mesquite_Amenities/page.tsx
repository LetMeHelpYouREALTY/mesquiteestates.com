"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { FaSwimmingPool, FaDumbbell, FaUtensils, FaTableTennis, FaBasketballBall, FaRoute, FaUsers } from "react-icons/fa";

import OfficeListings from "@/components/common/OfficeListings";
export default function SunCityMesquiteAmenities() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Sun City Mesquite Amenities
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Resort-style amenities designed for active adult living. From the 30,000 sq ft Pioneer Center 
            to championship golf, discover why Sun City Mesquite is Nevada&apos;s premier 55+ community.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>
        <OfficeListings />

        {/* Pioneer Center Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Pioneer Center - 30,000 Sq Ft Clubhouse</h2>
          <p className="text-base text-gray-700 mb-6">
            The heart of Sun City Mesquite, the Pioneer Center is a world-class facility offering both indoor 
            and outdoor amenities designed to enhance your active lifestyle.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Indoor Amenities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FaSwimmingPool className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Climate-controlled indoor swimming pool</span>
                </li>
                <li className="flex items-start">
                  <FaSwimmingPool className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Indoor lap pool for swimming & water aerobics</span>
                </li>
                <li className="flex items-start">
                  <FaDumbbell className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Two-story fitness center with upper walking track</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Heated spa/hot tub</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Aerobics & dance studio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Billiards room with lounge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Arts & crafts studio (with kiln!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Library with 7,000+ titles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Multi-purpose rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Great Hall for events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Kitchen with coffee bar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Computer kiosks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Conference center</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Outdoor Amenities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FaSwimmingPool className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Resort-style outdoor pool</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Outdoor spa</span>
                </li>
                <li className="flex items-start">
                  <FaTableTennis className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>22 pickleball courts (NEW!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>4 tennis courts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>7 bocce ball courts</span>
                </li>
                <li className="flex items-start">
                  <FaBasketballBall className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Basketball court</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>18-hole putting course</span>
                </li>
                <li className="flex items-start">
                  <FaRoute className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Scenic walking & biking trails (more than any Del Webb community!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Community parks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Covered patio seating</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sports Pavilion Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Sports Pavilion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Racquet Sports</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 22 pickleball courts (largest collection in any Del Webb community)</li>
                <li>• 4 tennis courts</li>
                <li>• Professional-grade playing surfaces</li>
                <li>• Evening lighting for night play</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Additional Sports</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 7 bocce ball courts</li>
                <li>• Basketball court</li>
                <li>• 18-hole putting course</li>
                <li>• Shuffleboard courts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trails & Parks Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaRoute className="text-indigo-900 text-4xl mr-4" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">Trails & Parks</h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Sun City Mesquite features more scenic walking and biking trails than any other Del Webb community. 
            These trails wind through the community, offering beautiful views of the mesas and desert landscape 
            while providing safe, dedicated paths for walking, jogging, and biking.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Community parks throughout Sun City Mesquite provide gathering spaces for residents, with shaded 
            seating areas, landscaping, and beautiful desert views.
          </p>
        </section>

        {/* Social Activities Section */}
        <section className="mb-16 bg-indigo-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FaUsers className="text-indigo-900 text-4xl mr-4" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">Social Activities & Clubs</h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            A full-time Activities Director coordinates clubs and interest groups, ensuring there&apos;s 
            always something exciting happening in Sun City Mesquite. From ice cream socials and holiday parties 
            to day trips to shows & attractions, the community calendar is always full.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Popular Clubs Include:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Accordion Interest Group</li>
                <li>• Art Studio Group</li>
                <li>• Astronomy Club</li>
                <li>• ATV Club</li>
                <li>• Basket Making</li>
                <li>• Basketball</li>
                <li>• Bible Study</li>
                <li>• Bicycling</li>
                <li>• Billiards</li>
                <li>• Genealogy</li>
                <li>• Woodworking</li>
                <li>• And many more!</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Activities Include:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Fitness classes (yoga, Jazzercise, water aerobics)</li>
                <li>• Book clubs</li>
                <li>• Educational travel</li>
                <li>• Tuacahn Center for the Arts trips</li>
                <li>• Day trips to Las Vegas shows</li>
                <li>• Holiday celebrations</li>
                <li>• Community-wide events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conestoga Golf Club Link */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Conestoga Golf Club</h2>
            <p className="text-xl mb-6 text-indigo-100">
              Experience championship golf at the award-winning Conestoga Golf Club, featuring an 18-hole 
              Gary Panks-designed course with stunning mesa views.
            </p>
            <Link
              href="/Conestoga_Golf_Mesquite"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              Learn More About Conestoga Golf Club →
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-12 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience Sun City Mesquite Amenities
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Schedule a tour to see these world-class amenities in person. Contact Dr. Jan Duffy to 
            learn more about living in Sun City Mesquite.
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
            <a
              href="https://calendly.com/drjanduffy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
            >
              Book a Time
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

