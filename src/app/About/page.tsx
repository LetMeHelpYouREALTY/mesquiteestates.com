"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Team from "@/components/ui/About/Team";

export default function About() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            About Mesquite Estates
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Mesquite Estates offers beautiful homes and custom lots in Mesquite, Nevada, a friendly small-town 
            destination nestled in the scenic Virgin River Valley, just an hour north of Las Vegas. We are committed 
            to excellence and dedicated to helping you find your dream home in this desert paradise.
          </p>
          <a
            href="tel:702-718-2228"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition duration-300 shadow-lg"
          >
            📞 Call/Text: 702-718-2228
          </a>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                Our Story
              </h2>
              <p className="text-base text-gray-700 mb-4">
                Mesquite Estates represents the vision of bringing exceptional living experiences to the beautiful 
                Virgin River Valley. Under the leadership of Dr. Jan Duffy, licensed since 2008 · 35 years in Las Vegas, we specialize 
                in helping clients discover their perfect home in Mesquite, Nevada. Our expertise in Mesquite real estate 
                encompasses everything from golf homes and luxury properties to custom lots and family residences, ensuring 
                that every client finds the ideal property that matches their lifestyle and budget.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Our journey is rooted in understanding the unique appeal of Mesquite - from its stunning desert landscapes 
                and world-class golf courses to its welcoming small-town community. We believe in fostering strong relationships 
                with our clients and delivering exceptional real estate services that help them achieve their dreams of living 
                in this desert paradise. Dr. Jan Duffy&apos;s experience as a Mesquite realtor provides clients with expert guidance 
                that makes the process of finding and purchasing Mesquite homes smooth and successful.
              </p>
              <p className="text-base text-gray-700 mb-4">
                The Mesquite Estates team understands that buying a home in Mesquite is more than just a real estate transaction - 
                it&apos;s about investing in a lifestyle enriched by natural beauty, recreational opportunities, and community connections. 
                Whether clients are seeking golf homes near championship courses, family residences in quiet neighborhoods, or custom 
                lots to build their dream home, we provide the expertise and personalized service that ensures successful outcomes.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Serving the Mesquite Real Estate Market
              </h3>
              <p className="text-base text-gray-700">
                Dr. Jan Duffy&apos;s role as a Mesquite realtor involves deep knowledge of the local real estate market, including 
                Mesquite homes for sale, golf course properties, and custom lots. Our comprehensive understanding of Mesquite real 
                estate trends, property values, and neighborhood characteristics enables us to provide clients with accurate 
                information and expert guidance. This market expertise, combined with professional realtor services, ensures that 
                clients receive exceptional representation throughout their real estate journey in Mesquite.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2">
              <Image
                src="/Image/story.png"
                alt="Our Story"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:order-1">
              <Image
                src="/Image/mission.webp"
                alt="Our Mission"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:order-2 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                Our Mission
              </h2>
              <p className="text-base text-gray-700 mb-4">
                Our mission is to help individuals and families discover their perfect home in Mesquite, Nevada. 
                We provide expert guidance in finding custom lots and homes that fit your lifestyle and budget, 
                from custom lots starting at $70K to beautiful homes ranging from $360K to $700K. As your trusted Mesquite 
                realtor, Dr. Jan Duffy offers comprehensive realtor services that make the process of finding and purchasing 
                Mesquite homes efficient and enjoyable.
              </p>
              <p className="text-base text-gray-700 mb-4">
                We are committed to excellence, integrity, and personalized service. Our goal is to create lasting value 
                for our clients by helping them invest in not just a property, but in a lifestyle enriched by Mesquite&apos;s 
                natural beauty, recreational opportunities, and welcoming community. Whether clients seek golf homes on 
                championship courses, family residences, or investment properties, our mission centers on providing expert 
                guidance that ensures successful real estate transactions.
              </p>
              
              {/* H3 Subsection */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                Comprehensive Realtor Services in Mesquite
              </h3>
              <p className="text-base text-gray-700">
                Our mission extends beyond simply helping clients find Mesquite homes for sale. We provide comprehensive realtor 
                services that include market analysis, property evaluation, negotiation, and transaction coordination. Dr. Jan Duffy&apos;s 
                expertise as a Mesquite realtor ensures that clients receive professional representation throughout the entire home 
                buying or selling process. This comprehensive approach to realtor services distinguishes our commitment to client 
                success in the Mesquite real estate market.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-8 text-center">
            Meet Our Team
          </h2>
          <p className="text-base text-gray-700 mb-6 max-w-3xl mx-auto text-center">
            The Mesquite Estates team consists of experienced real estate professionals dedicated to helping clients find their 
            perfect home in Mesquite, Nevada. Led by Dr. Jan Duffy, our team combines market expertise, local knowledge, and 
            personalized service to ensure successful real estate transactions. Our understanding of Mesquite homes, golf course 
            properties, and the local real estate market enables us to provide clients with expert guidance throughout their 
            home search and purchase journey.
          </p>
          
          {/* H3 Subsection */}
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4 text-center">
            Expertise in Mesquite Real Estate
          </h3>
          <p className="text-base text-gray-700 mb-8 max-w-3xl mx-auto text-center">
            Our team&apos;s expertise encompasses all aspects of Mesquite real estate, including golf homes, custom lots, family 
            residences, and investment properties. We understand the unique characteristics that make Mesquite homes desirable, 
            from proximity to championship golf courses to stunning desert views and resort amenities. This comprehensive knowledge 
            of the Mesquite real estate market enables us to match clients with properties that perfectly suit their needs and preferences.
          </p>
          
          <div className="py-10 px-4 bg-gray-100">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <div className="relative w-56 h-56 mx-auto mb-4">
                  <Image
                    src="/Image/agent1.jpg"
                    alt="Dr. Jan Duffy"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-indigo-900">
                  Dr. Jan Duffy
                </h3>
                <p className="text-gray-600">Mesquite Realtor | Las Vegas REALTOR®</p>
              </div>
            </div>
          </div>
        </section>

        <Team />
      </div>
      <Footer />
    </React.Fragment>
  );
}
