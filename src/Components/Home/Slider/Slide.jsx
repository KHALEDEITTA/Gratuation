import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../Assets/shutterstock_2164088641_0dbdb6dc4a.webp"
import slide2 from "../../../Assets/alahramat_msr_a7acd11ef6.webp"
import slide3 from "../../../Assets/shutterstock_1519243514_ead2797924.webp"
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';


const slides = [
  {
    image: "https://plus.unsplash.com/premium_photo-1661962355663-2a435ccf844d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Discover the wonders of Egypt",
    subtitle: "And create a lifetime of unforgettable memories.",
  },
  {
    image: "https://images.unsplash.com/photo-1525604529863-915380184a43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Embark on an unforgettable journey through the land of Pharaohs and Pyramids.  ",
    subtitle: "From ancient pyramids to vibrant cities.",
  },
  {
    image: "https://images.unsplash.com/photo-1681158077449-77f23f629f0d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Embark on an unforgettable journey through the land of Pharaohs and Pyramids.  ",
    subtitle: "From ancient pyramids to vibrant cities.",
  },
  {
    image: "https://images.unsplash.com/photo-1632944398987-494eebe663be?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Relax and unwind on beautiful beaches",
    subtitle: "Let your soul soak in the serenity.",
  },
  {
    image: "https://images.unsplash.com/photo-1593663094448-9ea85c6e8456?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Relax and unwind on beautiful beaches",
    subtitle: "Let your soul soak in the serenity.",
  },
  {
    image: "https://images.unsplash.com/photo-1593663094448-9ea85c6e8456?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="h-screen m-auto">

  
    <div
      className="relative h-full bg-cover bg-center flex items-center justify-start"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-[.09] z-0" />

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-white ml-8  max-w-4xl" //px-6 md:px-20
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text- text-4xl font-bold mb-4  ">
          BEST DESTINATIONS AROUND THE EGYPT
        </p>
        <h1 className="text-3xl md:text-3xl font-bold mb-5 ml-4 leading-tight">
          {title}
        </h1>
        <p className="text-2lg md:text-2xl mb-7 ml-7">{subtitle}</p>

        <div className="flex justify-start gap-4 ml-9">
          <button className="bg-orange-700  border-2 border-orange-700 text-black hover:bg-opacity-85 hover:scale-105 hover:text-white font-bold px-6 py-3 rounded-lg">
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
    </div>
  );
};

export default HeroSlider;



