import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div>
            <h3 className="font-bold text-2xl mb-6">Mesquite Estates</h3>
            <p className="text-indigo-200 mb-4">
              Homes by Dr. Jan Duffy<br />
              BHHS Nevada Properties
            </p>
            <p className="text-2xl font-bold text-orange-400 mb-4">
              <a href="tel:702-718-2228">702-718-2228</a>
            </p>
            <div className="flex space-x-4">
              {[faTwitter, faFacebookF, faLinkedinIn, faInstagram].map((icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  <FontAwesomeIcon icon={icon} className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Mesquite_Homes_For_Sale"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Homes for Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/Golf_Homes_Mesquite"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Golf Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/Sun_City_Mesquite"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Sun City Mesquite (55+)
                </Link>
              </li>
              <li>
                <Link
                  href="/Buying_Home_Mesquite"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Buying Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/sell-your-mesquite-home"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Sell Your Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About_Mesquite"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  About Mesquite
                </Link>
              </li>
              <li>
                <Link
                  href="/nearby-amenities"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Nearby Amenities
                </Link>
              </li>
            </ul>
          </div>

          {/* Communities Section */}
          <div>
            <h3 className="font-bold text-xl mb-6">Communities</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Sun_City_Mesquite"
                  className="text-indigo-200 hover:text-white transition duration-300 font-semibold"
                >
                  Sun City Mesquite (55+)
                </Link>
              </li>
              <li className="ml-4 space-y-2">
                <Link
                  href="/Sun_City_Mesquite_Floor_Plans"
                  className="text-indigo-300 hover:text-white transition duration-300 text-sm block"
                >
                  • Floor Plans
                </Link>
                <Link
                  href="/Sun_City_Mesquite_Amenities"
                  className="text-indigo-300 hover:text-white transition duration-300 text-sm block"
                >
                  • Amenities
                </Link>
                <Link
                  href="/Conestoga_Golf_Mesquite"
                  className="text-indigo-300 hover:text-white transition duration-300 text-sm block"
                >
                  • Conestoga Golf Club
                </Link>
              </li>
              <li>
                <Link
                  href="/communities/falcon-ridge"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Falcon Ridge
                </Link>
              </li>
              <li>
                <Link
                  href="/communities/mesquite-vistas"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Mesquite Vistas
                </Link>
              </li>
              <li>
                <Link
                  href="/communities/highland-villas"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Highland Villas
                </Link>
              </li>
              <li>
                <Link
                  href="/Golf_Homes_Mesquite"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Golf Course Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/55-plus-communities-mesquite"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  55+ Communities
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Services"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Home Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Custom Lots
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Property Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Real Estate Investment
                </Link>
              </li>
              <li>
                <Link
                  href="/Property/Property_type"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Browse Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Dr. Jan</h3>
            <address className="text-indigo-200 not-italic space-y-3">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-3 text-indigo-300 mt-1" />
                <span className="text-sm">
                  1155 W Pioneer Blvd<br />
                  Suite 104-D<br />
                  Mesquite, NV 89027
                </span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-3 text-indigo-300" />
                <a href="tel:702-718-2228" className="hover:text-white transition duration-300">
                  702-718-2228
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-3 text-indigo-300" />
                <a
                  href="mailto:DrDuffy@MesquiteEstates.com"
                  className="hover:text-white transition duration-300 text-sm"
                >
                  DrDuffy@MesquiteEstates.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-300">
          <p>
            © {new Date().getFullYear()} Mesquite Estates. All Rights Reserved.
          </p>
          <p className="mt-2">
            Dr. Jan Duffy | Nevada REALTOR® License #S.0197614.LLC<br />
            Berkshire Hathaway HomeServices Nevada Properties
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;