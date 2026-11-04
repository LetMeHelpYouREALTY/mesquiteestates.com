"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CalendlyBooking from "@/components/common/CalendlyBooking";

import OfficeListings from "@/components/common/OfficeListings";
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Contact Dr. Jan Duffy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-4">
            We&apos;re here to help. Call, text, email, or book a time on the calendar below.
          </p>
          <a 
            href="tel:702-718-2228" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>
        <OfficeListings />

        <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <FaPhoneAlt className="text-indigo-900 text-4xl mb-2" />
            <h2 className="text-2xl font-bold text-indigo-900 mb-2">Call Us</h2>
            <a 
              href="tel:702-718-2228" 
              className="text-lg text-indigo-900 hover:text-orange-500 font-semibold transition duration-300"
            >
              702-718-2228
            </a>
            <p className="text-sm text-gray-500 mt-1">Call or Text</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-indigo-900 text-4xl mb-2" />
            <h2 className="text-2xl font-bold text-indigo-900 mb-2">Email Us</h2>
            <a href="mailto:DrDuffy@MesquiteEstates.com" className="text-lg text-gray-600 hover:text-indigo-900 transition duration-300">
              DrDuffy@MesquiteEstates.com
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-indigo-900 text-4xl mb-2" />
            <h2 className="text-2xl font-bold text-indigo-900 mb-2">Visit Us</h2>
            <p className="text-lg text-gray-600">
              1155 W Pioneer Blvd<br />
              Suite 104-D<br />
              Mesquite, NV 89027<br />
              Open daily, 8 AM – 8 PM
            </p>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="mb-16 bg-indigo-50 p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">What Can We Help You With?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/Sun_City_Mesquite"
              className="bg-white hover:bg-indigo-100 p-6 rounded-lg shadow-md text-center transition duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Sun City Mesquite</h3>
              <p className="text-gray-600 text-sm">55+ Community Info</p>
            </Link>
            <Link
              href="/Mesquite_Homes_For_Sale"
              className="bg-white hover:bg-indigo-100 p-6 rounded-lg shadow-md text-center transition duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Homes for Sale</h3>
              <p className="text-gray-600 text-sm">Browse Properties</p>
            </Link>
            <Link
              href="/Golf_Homes_Mesquite"
              className="bg-white hover:bg-indigo-100 p-6 rounded-lg shadow-md text-center transition duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Golf Homes</h3>
              <p className="text-gray-600 text-sm">Golf Course Living</p>
            </Link>
            <Link
              href="/Services"
              className="bg-white hover:bg-indigo-100 p-6 rounded-lg shadow-md text-center transition duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Our Services</h3>
              <p className="text-gray-600 text-sm">Learn More</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Our Location</h2>
          <div className="relative w-full h-64 sm:h-80 lg:h-96">
            <iframe 
              src="https://www.google.com/maps?q=1155+W+Pioneer+Blvd+Suite+104-D+Mesquite+NV+89027&output=embed"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
              title="Dr. Jan Duffy - Mesquite Estates Office Location"
            ></iframe>
          </div>
        </section>
      </div>
      <CalendlyBooking />
      <Footer/>
    </>
  );
}
