// TravcoSearchPage.jsx
import React, { useState } from 'react';

import img1 from '../../Assets/d1.jpeg'
import img2 from '../../Assets/conectus.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "../../App.css";
import { FaClock } from "react-icons/fa";
const toursData = [
  {
    id: 1,
    images: [img1,img2,img1,img1,img1,img1],
    countries: 'Egypt, Jordan, Israel',
    title: 'THE AEGEAN ODYSSEY: Red Sea Wonders – A...',
    description: 'Sail through history and beauty across Egypt, Jordan, and Israel on this unforgettable Red...',
    duration: '8 Days',
  },
  {
    id: 2,
    images: [img1,img2,img1,img1,img1,img1],
    countries: 'Egypt, Jordan, Israel',
    title: 'THE AEGEAN ODYSSEY: Cairo & Red Sea Wonder...',
    description: 'Explore ancient Cairo and sail the Red Sea to Jordan, Israel, and Egypt’s coastal gems.',
    duration: '10 – 12 Days',
  },
  {
    id: 3,
   images: [img1,img1,img1,img1,img1,img1],
    countries: 'Egypt, Jordan, Israel',
    title: 'THE AEGEAN ODYSSEY: Hurghada & Red Sea...',
    description: 'Explore Egypt, Jordan, and Israel on a 7-night Red Sea cruise from Hurghada.',
    duration: '9 – 11 Days',
  },
];

const TravcoSearchPage = () => {
  const [query, setQuery] = useState('');

  const filteredTours = toursData.filter((tour) =>
    tour.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="font-sans text-gray-800">

      <div className="relative h-[500px] bg-cover bg-center bgTour" >
        <div className="absolute inset-0 bg-black/40 z-0" />
        
  

      
      <div className="relative z-10 flex flex-col items-center justify-center h-[500px]">
  {/* الصندوق الشفاف */}
  <div className="bg-white/80 backdrop-blur-md rounded-2xl px-6 py-6 w-[90%] max-w-6xl shadow-md">
    
    {/* Tabs داخل الفلتر - Suggested + Create */}
    <div className="flex justify-between items-center mb-6">
      <button className="text-lg font-semibold text-black">Suggested Tours</button>
      <button className="text-lg font-semibold text-black">Create Own Tour</button>
    </div>

    {/* Search Bar */}
    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
      
      {/* input + advanced */}
      <div className="flex flex-1 w-full relative">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white shadow-sm pr-44"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-red-600 font-semibold px-4 py-2 rounded-full text-sm hover:underline">
          Advanced Filters <span className="ml-1">▾</span>
        </button>
      </div>

      {/* Search */}
      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold">
        Search
      </button>
    </div>
  </div>
</div>

      </div>

   
      <div className="bg-white px-10 py-6">
        <h3 className="text-xl font-bold">Showing {filteredTours.length} results</h3>
      </div>

     
 
<div className="px-10 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {filteredTours.map((tour) => (
    <div key={tour.id} className="rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full h-48 swiper-custom"
        >
          {tour.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`Slide ${idx}`} className="w-full h-48 object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-600">{tour.countries}</p>
        <h4 className="text-md font-bold text-gray-900 mt-1 line-clamp-2">
          {tour.title}
        </h4>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{tour.description}</p>
        <div className="flex items-center text-red-600 text-sm font-medium mt-3 gap-1">
          <FaClock />
          <span>{tour.duration}</span>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default TravcoSearchPage;
