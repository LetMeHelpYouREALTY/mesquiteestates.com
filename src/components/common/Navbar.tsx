"use client";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSunCityDropdownOpen, setIsSunCityDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Phone Bar - Desktop Only */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end">
          <a href="tel:702-718-2228" className="text-sm font-semibold hover:text-orange-400 transition duration-300">
            📞 Call/Text: 702-718-2228
          </a>
        </div>
      </div>
      <nav className={`fixed top-0 md:top-8 left-0 right-0 z-50 bg-white shadow-md py-4 md:py-5 transition-all duration-300 ${isScrolled ? 'py-2 md:py-3 md:top-0' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer hover:text-indigo-600 transition-colors duration-300"
          >
            Mesquite<span className="text-indigo-600">Estates</span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={handleMobileMenuToggle}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
            </button>
          </div>

          {/* Desktop and Mobile Navigation Links */}
          <div
            id="mobile-menu"
            className={`lg:flex lg:items-center absolute lg:relative top-full left-0 right-0 bg-white lg:bg-transparent ${
              isMobileMenuOpen ? "block" : "hidden"
            } transition-all duration-300 lg:transition-none`}
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-1 xl:space-x-4 p-4 lg:p-0">
              {[
                { href: "/Mesquite_Homes_For_Sale", label: "Homes for Sale" },
                { href: "/Golf_Homes_Mesquite", label: "Golf Homes" },
                { href: "/About_Mesquite", label: "About Mesquite" },
                { href: "/nearby-amenities", label: "Nearby Amenities" },
                { href: "/Services", label: "Services" },
                { href: "/Dashboard", label: "Market Analysis" },
                { href: "/Contact_us", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Sun City Mesquite Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsSunCityDropdownOpen(true)}
                onMouseLeave={() => setIsSunCityDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsSunCityDropdownOpen(!isSunCityDropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                  aria-expanded={isSunCityDropdownOpen}
                  aria-haspopup="true"
                >
                  55+ Living
                  <FaChevronDown className={`ml-1 text-xs transition-transform duration-200 ${isSunCityDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50 ${
                    isSunCityDropdownOpen ? 'block' : 'hidden'
                  } lg:block`}
                >
                  <div className="py-1">
                    <Link
                      href="/Sun_City_Mesquite"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-150"
                      onClick={() => setIsSunCityDropdownOpen(false)}
                    >
                      Sun City Mesquite
                    </Link>
                    <Link
                      href="/Sun_City_Mesquite_Floor_Plans"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-150"
                      onClick={() => setIsSunCityDropdownOpen(false)}
                    >
                      Floor Plans
                    </Link>
                    <Link
                      href="/Sun_City_Mesquite_Amenities"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-150"
                      onClick={() => setIsSunCityDropdownOpen(false)}
                    >
                      Amenities
                    </Link>
                    <Link
                      href="/Conestoga_Golf_Mesquite"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-150"
                      onClick={() => setIsSunCityDropdownOpen(false)}
                    >
                      Conestoga Golf Club
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <a 
              href="tel:702-718-2228" 
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 ml-4 hidden lg:inline-block"
            >
              702-718-2228
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}