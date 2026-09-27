"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Newsletter from "@/components/common/Newsletter";
import { CONTACT_ERROR_MESSAGE } from "@/lib/contact-constants";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "contact",
          name,
          email,
          message,
          sourceUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(data?.error ?? CONTACT_ERROR_MESSAGE);
        return;
      }

      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError(CONTACT_ERROR_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Contact Dr. Jan Duffy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-4">
            We&apos;re here to help. Reach out to us through any of the methods below, and we&apos;ll get back to you as soon as possible.
          </p>
          <a 
            href="tel:702-718-2228" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>

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
              Mesquite, NV 89027
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
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Send Us a Message</h2>
            {isSuccess ? (
              <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
                <FaCheckCircle className="text-4xl text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-indigo-900 mb-2">Message Sent</h3>
                <p className="text-gray-700">
                  Thank you for reaching out. Dr. Jan Duffy will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-indigo-900 font-semibold underline hover:text-orange-500"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {error && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800" role="alert">
                    {error}
                  </p>
                )}
                <div>
                  <label htmlFor="name" className="block text-lg text-gray-600 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-900"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg text-gray-600 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-900"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg text-gray-600 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-900 h-40"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-indigo-900 text-white text-lg font-bold rounded-lg hover:bg-indigo-800 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send contact message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* RealScout Office Listings */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Browse Current Listings</h2>
          <p className="text-base text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Explore our current selection of homes, lots, and properties available in Mesquite, Nevada. 
            Contact us to schedule a viewing or get more information about any property that interests you.
          </p>
          <div className="w-full">
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="NEWEST" 
              listing-status="For Sale"
            ></realscout-office-listings>
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
      <Newsletter />
      <Footer/>
    </>
  );
}
