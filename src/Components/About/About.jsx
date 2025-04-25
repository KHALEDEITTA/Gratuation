import React, { useState } from 'react'
import ground from '../../Assets/mrsa_mtrwh_4a2989af89.webp'
import { CircleArrowDown , CircleArrowUp  } from 'lucide-react';
import Service from './About Services/Service';
import Detiles from './About Detils/Detiles';
import { motion } from "framer-motion";

export default function About() {
    const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <>
                    {/* image background */}
    <div className="relative h-[500px] w-full">
        <img
        src={ground}
        alt="About Background"
        className="w-full h-full object-center"
    />
    </div>

                    {/* image and description */}
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-3">Travco Travel - Delivering Excellence Since 1979</h1>
        
      </div>

      {/* Main Content with Images */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        {/* Left Column - Images */}
        <div className="md:w-1/2 space-y-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={ground} alt="Travel destination" className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                    <img src={ground} alt="Office location" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md grid grid-cols-1 gap-4">
                        <img src={ground} alt="Happy travelers" className="w-full h-full object-cover" />
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src={ground} alt="Office location" className="w-full h-full object-cover" />
                    </div>
                </div>
                
            </div>
        </div>

        {/* Right Column - Text */}
        <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 0 , y:-100 }}
        animate={{ opacity: 1, x: 0 ,y:40 }}
        transition={{ duration: 0.8 }}
        >
            <h2 className=" font-semibold text-4xl mb-6">Crafting Travel Experiences</h2>
            <p className="text-gray-700 text-md mb-8 leading-relaxed ">
                Welcome to Travco Travel, the premier destination management company in Egypt. With a rich history and a deep understanding of the travel industry, we take pride in offering fully integrated solutions that cater to all your travel needs. Our mission is to transform every journey into a cherished experience, inspiring individuals to expand their horizons and discover the wonders of the world.
            </p>

            <p className="text-gray-700 text-md mb-7 leading-relaxed">
                With our extensive network of international offices in Jordan, UAE, Qatar, Morocco, Zanzibar, and Oman, we are able to provide seamless travel experiences across borders. Whether you're looking to explore the ancient wonders of Egypt or venture into the vibrant landscapes of other countries, Travco Travel has you covered.
            </p>

        <p className="text-gray-700 leading-relaxed">
        In Egypt, we have branches strategically located in Cairo, Hurghada, Makadi, Marsa Alam, Sharm El Sheikh, Taba, Aswan, Luxor, Alexandria, and Mersa Matruh. This widespread presence allows us to offer exceptional on-ground support and personalized services throughout the country.
        </p>
                {/* Hidden content that appears when expanded */}
        {expanded && (
            <div className="space-y-5">
                <p className="text-gray-700 mt-8 leading-relaxed">
                    With our extensive network of international offices in Istanbul, UAE, Qatar, Morocco, Zanzibar and Oman, we are able to deliver new insights into the future.
                </p>
                <p className="text-gray-700 mt-7 leading-relaxed">
                    From organizing sightseeing tours to arranging transportation and accommodation, our dedicated team ensures that every aspect of your trip is taken care of.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    At Travco Travel, we believe that travel is not just about visiting new places, but also about creating lifelong memories. That's why we go above and beyond to curate unique experiences and provide unparalleled customer service
                </p>
            </div>
        )}
            {/* // Button view More  //*/}
            <div className="text-center mt-6">
                <button 
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 text-lg font-medium"
                onClick={toggleExpand}
                >
                {expanded ? 'View Less' : 'View More'} 
                <span className="ml-2 text-xl">
                    {expanded ? <CircleArrowUp /> : <CircleArrowDown />}
                </span>
                </button>
            </div>
        </motion.div>
        </div>
      </div>

                                    {/* Service */}
        <div>
            <Service />
        </div>

        <div>
            <Detiles />
        </div>
    
    </>
  )
}
