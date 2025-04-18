import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-6 py-12">
      {/* Logos Row */}
      <div className="flex justify-center items-center gap-10 flex-wrap mb-10">
        {["axon", "Jetstar", "Expedia", "QANTAS", "Alitalia"].map((brand) => (
          <span key={brand} className="text-xl font-semibold opacity-70">
            {brand}
          </span>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-purple-50 rounded-xl p-6 md:p-10 mb-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full md:w-1/2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-3 rounded-md">
            Subscribe
          </button>
        </div>
        <div className="absolute top-4 right-4 bg-blue-500 rounded-full p-2">
          <span className="text-white text-xl">📨</span>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Logo + Description */}
        <div>
          <h2 className="text-xl font-bold mb-2">Skyline</h2>
          <p>
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <ul className="space-y-1">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-bold mb-2">More</h3>
          <ul className="space-y-1">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
      </div>

      {/* Social + App Links */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-xl">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

        <div className="flex items-center gap-2">
          <p>Discover our app</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Play Store"
            className="h-10"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-10"
          />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-400 mt-10">
        All rights reserved © jadoo.co
      </p>
    </footer>
  );
}