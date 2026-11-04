"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { FaGolfBall, FaHome, FaSwimmingPool, FaDumbbell, FaUtensils, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

import OfficeListings from "@/components/common/OfficeListings";
export default function SunCityMesquite() {
  const faqs = [
    {
      question: "What is the age requirement for Sun City Mesquite?",
      answer: "Sun City Mesquite is a 55+ community. At least one resident in each household must be 55 years or older. No permanent residents under 19 are permitted."
    },
    {
      question: "What are the HOA fees in Sun City Mesquite?",
      answer: "HOA fees typically range from $150-$250 per month, covering common area maintenance, amenities access, landscaping, and community services. Sun City Mesquite falls under both the Sun City Mesquite HOA and Anthem Mesquite Master Association."
    },
    {
      question: "Does Sun City Mesquite have golf?",
      answer: "Yes! The community features the award-winning Conestoga Golf Club, an 18-hole championship course designed by Gary Panks. Residents enjoy discounted rates and preferred tee times."
    },
    {
      question: "How far is Sun City Mesquite from Las Vegas?",
      answer: "Sun City Mesquite is approximately 80 miles northeast of Las Vegas, about a 1-hour drive to the Strip."
    },
    {
      question: "What home styles are available in Sun City Mesquite?",
      answer: "As of October 12, 2026, Del Webb listed three single-story series (Cottage, Retreat and Encore) with plans from 1,285 to 2,731 square feet and base prices from $349,990."
    },
    {
      question: "Is there a restaurant in Sun City Mesquite?",
      answer: "Yes, the 1880 Grille at Conestoga Golf Club offers dining and drinks. It's known for its 1880 Burger and 1880 Lager."
    },
    {
      question: "Can I rent my home in Sun City Mesquite?",
      answer: "Many owners do rent seasonally to snowbirds. Check HOA rules for specific rental guidelines and restrictions."
    },
    {
      question: "What national parks are near Sun City Mesquite?",
      answer: "Sun City Mesquite offers easy access to Valley of Fire, Zion National Park, Grand Canyon, Bryce Canyon, Arches National Park, and Lake Mead."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy - Sun City Mesquite Expert",
    "image": "https://pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev/raw/active-adult-clubhouse-pool.jpg",
    "url": "https://www.mesquiteestates.com/Sun_City_Mesquite",
    "telephone": "+1-702-718-2228",
    "email": "DrDuffy@MesquiteEstates.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1155 W Pioneer Blvd, Suite 104-D",
      "addressLocality": "Mesquite",
      "addressRegion": "NV",
      "postalCode": "89027",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Sun City Mesquite"
    },
    "priceRange": "From $349,990",
    "memberOf": {
      "@type": "Organization",
      "name": "Berkshire Hathaway HomeServices Nevada Properties"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Sun City Mesquite Homes for Sale
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4">
            Nevada&apos;s Premier Del Webb 55+ Active Adult Community
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Nestled below a gorgeous mesa and surrounding the award-winning Conestoga Golf Club, 
            Sun City Mesquite offers resort-style living in the beautiful Virgin River Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Golf_Homes_Mesquite"
              className="bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              Search Sun City Homes
            </Link>
            <a
              href="tel:702-718-2228"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
            >
              📞 Call 702-718-2228
            </a>
          </div>
        </section>
        <OfficeListings />

        {/* Key Stats Section */}
        <section className="mb-16 bg-indigo-50 p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Sun City Mesquite at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-900 mb-2">55+</div>
              <div className="text-gray-700">Age Requirement<br />(at least one resident)</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-900 mb-2">3,750</div>
              <div className="text-gray-700">Planned Single-Family Homes</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-900 mb-2">30,000</div>
              <div className="text-gray-700">Sq Ft Clubhouse<br />(Pioneer Center)</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-900 mb-2">18</div>
              <div className="text-gray-700">Holes of Golf<br />(Conestoga Golf Club)</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-indigo-900 mb-2">Home Prices</div>
              <div className="text-gray-700">New from $349,990 (Del Webb, Oct 12, 2026)</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-indigo-900 mb-2">Home Sizes</div>
              <div className="text-gray-700">1,285 - 2,731 sq ft</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-indigo-900 mb-2">HOA Fees</div>
              <div className="text-gray-700">~$150-$250/month</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700">
              <FaMapMarkerAlt className="inline mr-2 text-indigo-600" />
              <strong>Models Open Daily 9AM-5PM</strong><br />
              1300 Flat Top Mesa Dr, Mesquite, NV 89034
            </p>
          </div>
        </section>

        {/* Community Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">About Sun City Mesquite</h2>
          <p className="text-base text-gray-700 mb-4">
            Sun City Mesquite is one of Del Webb&apos;s most sought-after 55+ communities near Las Vegas. 
            Located just 80 miles northeast of Las Vegas in the scenic Virgin River Valley, this 
            vibrant community combines low-maintenance living with resort-style amenities.
          </p>
          <p className="text-base text-gray-700 mb-4">
            With 300 average days of sunshine, no state income tax, and homes 30-40% below Las Vegas 
            prices, Sun City Mesquite has become Nevada&apos;s best-kept secret for active adult living.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The community is an easy day&apos;s drive from Arizona, California, Colorado, and Utah - 
            an easy trip for visiting guests.
          </p>
        </section>

        {/* Amenities Section - Pioneer Center */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Pioneer Center - 30,000 Sq Ft Clubhouse</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
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
            <div>
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
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
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
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Basketball court</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>18-hole putting course</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1 flex-shrink-0">•</span>
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
          <div className="text-center">
            <Link
              href="/Sun_City_Mesquite_Amenities"
              className="inline-block bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              View All Amenities →
            </Link>
          </div>
        </section>

        {/* Golf Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FaGolfBall className="text-indigo-900 text-4xl mr-4" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">Conestoga Golf Club</h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            The award-winning Conestoga Golf Club opened in 2009 and is managed by Troon Golf. 
            This Gary Panks-designed masterpiece offers 18 holes, par-72 championship golf with 
            7,204 yards from the tips, 1,000+ feet of elevation changes, rock outcroppings & native 
            desert plants, tranquil water elements, and stunning mesa backdrops.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Sun City Mesquite residents enjoy discounted golf rates, preferred tee times (book 7 days 
            in advance), and priority over non-residents. The <FaUtensils className="inline text-indigo-600" /> 1880 Grille restaurant & sports bar 
            offers excellent dining with signature items like the 1880 Burger and 1880 Lager.
          </p>
          <div className="text-center mt-6">
            <Link
              href="/Conestoga_Golf_Mesquite"
              className="inline-block bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              Learn More About Conestoga Golf Club →
            </Link>
          </div>
        </section>

        {/* Home Collections Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Home Collections</h2>
          <p className="text-base text-gray-700 mb-6">
            As of October 12, 2026, Del Webb listed three single-family series. Base prices exclude lot premiums and options:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-3">Cottage Series</h3>
              <div className="text-xl font-bold text-indigo-600 mb-2">From $349,990</div>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>• 1,285+ sq ft</li>
                <li>• 2 beds, 2 baths</li>
                <li>• Models: Canyon, Pine Spring</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-3">Retreat Series</h3>
              <div className="text-xl font-bold text-indigo-600 mb-2">From $429,990</div>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>• 1,573+ sq ft</li>
                <li>• 2 beds, 2 baths</li>
                <li>• Models: Hideaway, Bellwood, Preserve</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-3">Encore Series</h3>
              <div className="text-xl font-bold text-indigo-600 mb-2">From $491,990</div>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>• 2,023+ sq ft</li>
                <li>• 2-3 beds, 2-2.5 baths</li>
                <li>• Models: Voyage</li>
              </ul>
            </div>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">All Homes Feature:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• Single-story ranch designs</li>
                <li>• 2-car garages (many with golf cart storage)</li>
                <li>• Open floor plans</li>
                <li>• Energy-efficient construction</li>
              </ul>
              <ul className="space-y-2">
                <li>• Smart home technology options</li>
                <li>• Granite countertops available</li>
                <li>• Indoor-outdoor living flow</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/Sun_City_Mesquite_Floor_Plans"
              className="inline-block bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              View All Floor Plans →
            </Link>
          </div>
        </section>

        {/* Quick Move-In Homes Table */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Quick Move-In Homes Available</h2>
          <p className="text-base text-gray-700 mb-4">
            As of December 2024, the following homes are available for quick move-in. Prices and availability change frequently.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-indigo-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Model</th>
                  <th className="px-4 py-3 text-left">Series</th>
                  <th className="px-4 py-3 text-right">Price</th>
                  <th className="px-4 py-3 text-right">Sq Ft</th>
                  <th className="px-4 py-3 text-center">Beds</th>
                  <th className="px-4 py-3 text-center">Baths</th>
                  <th className="px-4 py-3 text-right">Savings</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="px-4 py-3">Canyon</td>
                  <td className="px-4 py-3">Cottage</td>
                  <td className="px-4 py-3 text-right font-semibold">$360,419</td>
                  <td className="px-4 py-3 text-right">1,285</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-right text-green-600 font-semibold">$40,300</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Pine Spring</td>
                  <td className="px-4 py-3">Cottage</td>
                  <td className="px-4 py-3 text-right font-semibold">$369,937</td>
                  <td className="px-4 py-3 text-right">1,420</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-right text-green-600 font-semibold">$37,000</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Hideaway</td>
                  <td className="px-4 py-3">Retreat</td>
                  <td className="px-4 py-3 text-right font-semibold">$477,265</td>
                  <td className="px-4 py-3 text-right">1,573</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-right text-green-600 font-semibold">$55,000</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Bellwood</td>
                  <td className="px-4 py-3">Retreat</td>
                  <td className="px-4 py-3 text-right font-semibold">$488,322</td>
                  <td className="px-4 py-3 text-right">1,865</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-right text-green-600 font-semibold">$46,000</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Preserve</td>
                  <td className="px-4 py-3">Retreat</td>
                  <td className="px-4 py-3 text-right font-semibold">$482,334</td>
                  <td className="px-4 py-3 text-right">2,010</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-right text-green-600 font-semibold">$69,910</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Voyage</td>
                  <td className="px-4 py-3">Encore</td>
                  <td className="px-4 py-3 text-right font-semibold">$658,045</td>
                  <td className="px-4 py-3 text-right">2,731</td>
                  <td className="px-4 py-3 text-center">3</td>
                  <td className="px-4 py-3 text-center">2.5</td>
                  <td className="px-4 py-3 text-right text-green-600 font-semibold">$100,390</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 italic">
            *Note: Prices and availability change frequently. Contact Dr. Jan Duffy for current listings.
          </p>
        </section>

        {/* Location & Nearby Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-indigo-900 text-4xl mr-4" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900">Location & Nearby Attractions</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Sun City Mesquite Address</h3>
              <p className="text-lg text-gray-700 mb-4">
                1350 Flat Top Mesa Drive<br />
                Mesquite, NV 89034
              </p>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4 mt-6">Nearby Services (within 5 miles)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Smith&apos;s Food and Drug</li>
                <li>• Walmart</li>
                <li>• Walgreens</li>
                <li>• Mesa View Regional Hospital</li>
                <li>• Intermountain Healthcare</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Day Trip Destinations</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Las Vegas Strip: 80 miles (1 hour)</li>
                <li>• St. George, UT: 30 minutes</li>
                <li>• Valley of Fire State Park: 45 minutes</li>
                <li>• Zion National Park: 1.5 hours</li>
                <li>• Grand Canyon North Rim: 3 hours</li>
                <li>• Bryce Canyon: 2.5 hours</li>
                <li>• Lake Mead: 1 hour</li>
                <li>• Park City, UT (skiing): 6 hours</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lifestyle & Activities Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Active Lifestyle & Social Connection</h2>
          <p className="text-base text-gray-700 mb-4">
            A full-time Activities Director coordinates clubs and interest groups, ice cream socials, 
            holiday parties, day trips to shows & attractions, Tuacahn Center for the Arts trips, fitness classes 
            (yoga, Jazzercise, water aerobics), book clubs, and educational travel.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Popular clubs include: Accordion Interest Group, Art Studio Group, Astronomy Club, ATV Club, Basket Making, 
            Basketball, Bible Study, Bicycling, Billiards, Genealogy, Woodworking, and many more!
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-12 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Find Your Sun City Mesquite Home
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Let Dr. Jan Duffy help you find the perfect home in Nevada&apos;s premier 55+ community.
            With 500+ Vegas Valley clients helped, I know this market inside and out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link
              href="/Golf_Homes_Mesquite"
              className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Search Sun City Homes
            </Link>
            <a
              href="tel:702-718-2228"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              📞 Call/Text 702-718-2228
            </a>
            <Link
              href="/Contact_us"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
            >
              Contact Form
            </Link>
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

