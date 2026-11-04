"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { FaCar, FaPlane, FaRoute, FaMapMarkerAlt } from "react-icons/fa";

import OfficeListings from "@/components/common/OfficeListings";
export default function MesquiteTransportation() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* H1 - Only One */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Travel to Mesquite, Nevada | Transportation Guide for Visiting Mesquite Homes
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-6">
            Just 80 miles north of Las Vegas, Mesquite is situated in the scenic Virgin River Valley and is easy to reach by car, plane, or shuttle. 
            Discover convenient transportation options for visiting Mesquite homes and exploring this premier desert destination. Dr. Jan Duffy helps 
            clients plan visits to view Mesquite real estate with easy access information.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>
        <OfficeListings />

        {/* H2 Section 1 */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaCar className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Driving to Mesquite from Las Vegas
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Driving to Mesquite from Las Vegas provides the most direct and scenic route to this premier destination. Located just 80 miles north 
            of Las Vegas along Interstate 15, Mesquite is easily accessible by car, making it convenient for visitors planning to view Mesquite homes 
            or explore the area. The drive from Las Vegas to Mesquite takes approximately one hour, offering beautiful desert vistas as you approach 
            the Virgin River Valley.
          </p>
          <p className="text-base text-gray-700 mb-4">
            When driving to Mesquite, you&apos;ll follow Interstate 15 north from Las Vegas, experiencing the stunning desert landscape that makes 
            this region unique. The straightforward route makes it easy for potential homebuyers to visit Mesquite homes, with clear directions and 
            minimal navigation challenges. Many clients working with Dr. Jan Duffy, a trusted Mesquite realtor, find that driving to Mesquite allows 
            them flexibility to explore different neighborhoods and view multiple Mesquite homes during their visit.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The convenience of driving to Mesquite from Las Vegas makes it an ideal day trip destination, allowing visitors to explore Mesquite homes, 
            enjoy the area&apos;s amenities, and return to Las Vegas the same day if desired. However, many visitors find that Mesquite&apos;s 
            welcoming atmosphere and beautiful setting encourage longer stays, particularly when viewing Mesquite homes for potential purchase.
          </p>
          
          {/* H3 Subsection */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
              Road Trip from Las Vegas to Mesquite
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Planning a road trip from Las Vegas to Mesquite provides an easy adventure that packs in big desert beauty. Within just over an hour 
              along Interstate 15, you can cruise straight to Mesquite, making it an ideal destination for road trips. The scenic drive enhances the 
              experience of visiting Mesquite, whether you&apos;re planning to view Mesquite homes or simply exploring the area as a potential homebuyer.
            </p>
            <p className="text-base text-gray-700">
              The road trip route to Mesquite is well-maintained and clearly marked, ensuring a stress-free journey. Many visitors find that the drive 
              to Mesquite becomes part of the appeal, with stunning desert views and the anticipation of exploring this unique destination. When working 
              with Dr. Jan Duffy to view Mesquite homes, clients often enjoy the scenic journey as much as the destination itself.
            </p>
          </div>
        </section>

        {/* H2 Section 2 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaPlane className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Flying to Mesquite via Las Vegas
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                For visitors traveling from distant locations to view Mesquite homes, flying to Las Vegas McCarran International Airport provides 
                convenient access to Mesquite. The airport offers numerous flight options from cities across the country, making it easy to reach 
                Mesquite regardless of your starting point. From Las Vegas, you can easily complete your journey to Mesquite by rental car or shuttle service.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Many clients viewing Mesquite homes appreciate the accessibility provided by Las Vegas International Airport, as it allows them to 
                efficiently plan visits to explore Mesquite real estate. Dr. Jan Duffy, an experienced Mesquite realtor, helps out-of-town clients 
                coordinate transportation arrangements when visiting Mesquite homes, ensuring smooth travel experiences.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Shuttle Services to Mesquite
              </h3>
              <p className="text-base text-gray-700">
                Shuttle services from Las Vegas to Mesquite provide convenient transportation options for visitors who prefer not to drive. These 
                services make it easy to reach Mesquite from Las Vegas, particularly for those planning short visits to view Mesquite homes or 
                explore the area. Shuttle availability enhances the accessibility of Mesquite, supporting visitors interested in Mesquite real estate.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2">
              <Image
                src="https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw/mesquite-nevada-town-aerial-dusk.jpg"
                alt="Transportation to Mesquite, Nevada"
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
              Mesquite Area Map and Directions
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Driving to Mesquite? Planning to explore the surrounding area? The Mesquite area map provides easy-to-read directions and route planning 
            that helps visitors navigate to Mesquite homes and local attractions. Understanding the Mesquite area layout is particularly valuable for 
            homebuyers working with Dr. Jan Duffy to explore different neighborhoods and view various Mesquite homes throughout the community.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The Mesquite area map reveals the community&apos;s strategic location in the Virgin River Valley, surrounded by scenic vistas and flat-top 
            red mesas. This geographical context helps visitors appreciate why Mesquite homes offer such desirable settings, with natural beauty and 
            recreational opportunities integrated into the community layout. The easy navigation throughout Mesquite makes it simple to explore different 
            areas when viewing Mesquite homes.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            Navigating to Mesquite Homes
          </h3>
          <p className="text-base text-gray-700 mb-4">
            When visiting Mesquite to view homes, the area&apos;s straightforward layout and clear signage make navigation simple. Many Mesquite homes 
            are located in easily accessible neighborhoods, with convenient proximity to golf courses, resorts, and community amenities. Dr. Jan Duffy 
            provides detailed directions and area maps to clients viewing Mesquite homes, ensuring efficient property tours and neighborhood exploration.
          </p>
          <p className="text-base text-gray-700">
            The Mesquite area map helps homebuyers understand the relationship between different neighborhoods and key amenities, such as the seven 
            championship golf courses, resort facilities, and shopping areas. This understanding is valuable when evaluating Mesquite homes, as location 
            considerations are important factors in real estate decisions. Easy access to amenities enhances the value of Mesquite homes throughout the community.
          </p>
        </section>

        {/* H2 Section 4 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:order-1">
              <Image
                src="https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw/virgin-river-valley-sunset.jpg"
                alt="Virgin River Valley location"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="lg:order-2 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <FaRoute className="text-indigo-900 text-3xl mr-3" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                  Proximity to Major Transportation Hubs
                </h2>
              </div>
              <p className="text-base text-gray-700 mb-4">
                Mesquite&apos;s location just 80 miles north of Las Vegas provides excellent proximity to major transportation hubs, enhancing the 
                accessibility of Mesquite homes for both residents and visitors. The convenient distance to Las Vegas International Airport makes 
                travel to and from Mesquite straightforward, whether you&apos;re visiting to view Mesquite homes or traveling for business or pleasure.
              </p>
              <p className="text-base text-gray-700 mb-4">
                The strategic location of Mesquite in relation to Las Vegas means that residents of Mesquite homes enjoy the benefits of easy access 
                to a major metropolitan area while living in a peaceful desert community. This proximity is particularly valuable for homeowners who 
                travel frequently or have business connections in Las Vegas, making Mesquite homes attractive for both primary residences and vacation properties.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Accessibility and Mesquite Real Estate Value
              </h3>
              <p className="text-base text-gray-700">
                The easy transportation access to Mesquite enhances the value of Mesquite homes, as convenient location is always an important factor 
                in real estate. The combination of peaceful living in Mesquite with easy access to Las Vegas creates an ideal balance that appeals to 
                many homebuyers. Dr. Jan Duffy, a knowledgeable Mesquite realtor, helps clients understand how transportation accessibility contributes 
                to the desirability and value of Mesquite homes in different neighborhoods.
              </p>
            </div>
          </div>
        </section>

        {/* H2 Section 5 */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-indigo-900 text-3xl mr-3" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">
              Planning Your Visit to View Mesquite Homes
            </h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            When planning your visit to Mesquite to view homes, the convenient transportation options make it easy to schedule property tours and 
            neighborhood exploration. Dr. Jan Duffy, an experienced Mesquite realtor, helps clients plan efficient visits that maximize their time 
            viewing Mesquite homes while also experiencing the area&apos;s amenities and lifestyle. Understanding transportation options ensures that 
            your visit to explore Mesquite real estate is smooth and productive.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Whether you&apos;re driving from Las Vegas, flying into the area, or using shuttle services, planning your transportation in advance helps 
            ensure that your visit to view Mesquite homes is organized and efficient. The easy access to Mesquite means that even short visits can be 
            productive for exploring Mesquite homes and getting a sense of the community. Many clients find that the convenient transportation to Mesquite 
            makes it easy to make multiple visits when seriously considering Mesquite homes for purchase.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            Working with Dr. Jan Duffy for Mesquite Home Visits
          </h3>
          <p className="text-base text-gray-700 mb-4">
            Dr. Jan Duffy, your trusted Mesquite realtor, provides transportation guidance and area information to clients planning visits to view 
            Mesquite homes. Her expertise includes helping out-of-town buyers coordinate travel arrangements and plan efficient property tours. The 
            convenient transportation options to Mesquite support her ability to serve clients from various locations interested in Mesquite real estate.
          </p>
          <p className="text-base text-gray-700">
            The accessibility of Mesquite enhances Dr. Jan Duffy&apos;s ability to provide comprehensive realtor services, as clients can easily visit 
            to view Mesquite homes, attend closings, and become familiar with the community. Whether you&apos;re local to the area or traveling from 
            distant locations, the transportation options to Mesquite ensure that working with Dr. Jan Duffy to find your ideal Mesquite home is convenient 
            and straightforward.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Plan Your Visit to Mesquite Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            With easy access by car, plane, or shuttle, visiting Mesquite to view homes is convenient and straightforward. Contact Dr. Jan Duffy to 
            schedule your visit and explore beautiful Mesquite homes in this premier desert destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-718-2228"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              📞 Call/Text 702-718-2228
            </a>
            <Link
              href="/Mesquite_Homes_For_Sale"
              className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              View Mesquite Homes
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

