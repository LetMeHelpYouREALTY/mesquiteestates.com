"use client";
import Navbar from "../../common/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
   "/Image/hero_bg_1.jpg",
   "/Image/hero_bg_2.jpg",
   "/Image/hero_bg_3.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700  ${index === currentImage ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={src}
                alt={index === 0 ? "Mesquite Estates - Beautiful homes in Mesquite, Nevada" : `Mesquite Estates background image ${index + 1}`}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                sizes="100vw"
                priority={index === 0}
                quality={85}
              />
            </div>
          ))}
          <div className="relative z-20 p-4 text-center">
            <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-white mb-2 leading-relaxed bg-black/50 rounded-md p-2">
              Mesquite Nevada Homes for Sale
            </h1>
            <h2 className="text-lg md:text-xl lg:text-3xl font-semibold text-white mb-2 bg-black/50 rounded-md p-2">
              Golf Course Living • 55+ Communities • Custom Lots & New Builds
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white mb-6 bg-black/50 rounded-md p-2 mx-auto max-w-3xl">
              Just 80 miles from Las Vegas in the stunning Virgin River Valley
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-4 max-w-4xl mx-auto w-full px-4">
              <a
                href="/Mesquite_Homes_For_Sale"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg"
              >
                Search Homes
              </a>
              <a
                href="tel:702-718-2228"
                className="bg-white hover:bg-gray-100 text-orange-600 font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg"
              >
                Call/Text 702-718-2228
              </a>
            </div>

            <div className="flex items-center justify-center mb-4 max-w-4xl mx-auto w-full px-4">
              <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
