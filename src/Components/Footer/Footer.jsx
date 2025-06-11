// components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
const footerLinks = {
  services: [
    "Destination Guide",
    "Packages",
    "Nile Cruises",
    "Day Trips & Excursions",
    "Fast Track & Airport Transfer",
    "Visa Assistance & Meet and Greet",
  ],
  destinations: [
    "Aswan",
    "Cairo",
    "Hurghada",
    "Luxor",
    "Marsa Alam",
    "Mersa Matruh",
    "Sharm El Sheikh",
  ],
  about: [
    "About Travco",
    "Travco News",
    "International Offices",
    "Affiliated Companies",
    "Contact Us",
    "Be Our Partner",
    "Branches",
    "Destination Handbook",
    "Testimonials",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Our Services */}
        <div>
          <h3 className="text-white text-2xl font-serif mb-4">Our Services</h3>
          <ul className="space-y-2 opacity-75">
            {footerLinks.services.map((item, idx) => (
              <li
                key={idx}
                className={`hover:text-red-600 transition `}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Top Destinations */}
        <div>
          <h3 className="text-white text-2xl font-serif mb-4">Top Destinations</h3>
          <ul className="space-y-2 opacity-75">
            {footerLinks.destinations.map((item, idx) => (
              <li key={idx} className="hover:text-red-600 transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white text-2xl font-serif mb-4">About Us</h3>
          <ul className="space-y-2 opacity-75">
            {footerLinks.about.map((item, idx) => (
              <li key={idx} className="hover:text-red-600 transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-white text-2xl font-serif mb-4">Contacts</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FiPhone className="text-lg" />
              <span className="text-white font-semibold">(+202) 3854 1010</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 pl-6">
              Round the clock support
            </div>

            <div className="flex items-center gap-2 mt-2">
              <MdEmail className="text-lg" />
              <span className="text-white font-semibold">info@travco.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 pl-6">
              For any inquiries
            </div>

            <div className="flex items-start gap-2 mt-3">
              <GoLocation className="text-xl mt-1" />
              <p className="text-white text-sm">
                Travco Center, 26th Of July Corridor. <br />
                6th Of October, Egypt.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <SocialIcon icon={<FaFacebookF />} bg="bg-sky-700 text-white "/>
              <SocialIcon icon={<FaXTwitter />} bg="bg-white"/>
              <SocialIcon icon={<FaInstagram />} bg="bg-orange-500 text-white "/>
              <SocialIcon icon={<FaYoutube />} bg="bg-red-600 text-white " />
              <SocialIcon icon={<FaWhatsapp />} bg="bg-green-500 text-white " />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, bg = "bg-white", color = "text-black" }) {
  return (
    <div
      className={`${bg} ${color} w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition text-lg`}
    >
      {icon}
    </div>
  );
}
