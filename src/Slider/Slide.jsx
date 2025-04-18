// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../data/shutterstock_2164088641_0dbdb6dc4a.webp"
import slide2 from "../data/alahramat_msr_a7acd11ef6.webp"
import slide3 from "../data/shutterstock_1519243514_ead2797924.webp"
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: slide1,
    title: "Explore the world, embrace new adventures",
    subtitle: "And create a lifetime of unforgettable memories.",
  },
  {
    image: slide2,
    title: "Discover the wonders of Egypt",
    subtitle: "From ancient pyramids to vibrant cities.",
  },
  {
    image: slide3,
    title: "Relax and unwind on beautiful beaches",
    subtitle: "Let your soul soak in the serenity.",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const { image, title, subtitle } = slides[currentIndex];

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-white text-center px-6 md:px-20 max-w-4xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-orange-400 font-bold mb-3 text-sm">
          BEST DESTINATIONS AROUND THE WORLD
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-6">{subtitle}</p>

        <div className="flex justify-center gap-4">
          <button className="bg-stone-50 text-black font-bold px-6 py-3 rounded-lg">
            Find out more
          </button>
          
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-10">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full bg-white/40 text-white text-xl flex items-center justify-center hover:scale-110 transition"
        >
            <ArrowLeft className=" hover:text-red-500" />
        </button>
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-white/40 text-white text-xl flex items-center justify-center hover:scale-110 transition"
        >
            <ArrowRight className="hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;



