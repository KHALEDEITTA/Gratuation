import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo_1 from "../../../Assets/logo-iata.png";
import logo_2 from "../../../Assets/logo-italianchamber.png";
import logo_3 from "../../../Assets/_14517_logo-iata.jpg";
import logo_4 from "../../../Assets/_12618_logo-iata2.jpg";
import logo_5 from "../../../Assets/_1905_logo-iata1.jpg";
import logo_6 from "../../../Assets/logo-ahk.png";
import logo_7 from "../../../Assets/logo-drv.png";
import logo_8 from "../../../Assets/logo-amc.png";
const images = [
    logo_1,
    logo_2,
    logo_3,
    logo_4,
    logo_5,
    logo_6,
    logo_7,
    logo_8,
];

export default function Logo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden h-[320px]">
        
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-[50%] h[10%] m-auto  object-cover"
        />
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
