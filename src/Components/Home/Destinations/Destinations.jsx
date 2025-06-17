// import React, { useEffect } from 'react';
// import img1 from '../../../Assets/d1.jpeg'
// import img4 from '../../../Assets/download (3).png'
// import img5 from '../../../Assets/download (4).png'
// import img6 from '../../../Assets/download (7).png'
// import '../../../App.css'
// import img2 from '../../../Assets/edinburgh-castle-guide-feautred-guide.webp'
// import img3 from '../../../Assets/d1.jpeg'
// import { GiCommercialAirplane } from "react-icons/gi";
// import { FaHome } from "react-icons/fa";
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchalldestination } from '../../../store/destinationslic';
// import { Link } from 'react-router';
// const destinations = [
//   { city: 'London, UK', price: '$4.2k', days: '12 Days Trip', img: img1 },
//   { city: 'Rome, Italy', price: '$3.42k', days: '10 Days Trip', img: img2},

//   { city: 'Full Europe', price: '$15k', days: '28 Days Trip', img: img3 },
// ];

// const Destinations = () => {
//   const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(fetchalldestination())
    
//   },[])
//   const {list}=useSelector((state)=>state.destinations)
//   return (
//     <section className="py-12 flex flex-col Destination relative  items-center justify-center px-6 bg-gray-50">

//       <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Top Destinations</h2>
//       <div className="grid lg:w-3/4 grid-cols-1 md:grid-cols-3  gap-12">
//         {list.slice(0,3).map((dest, index) => (
//        <Link to={`/TourCard/${dest.destinationId}`}>   <div key={index} className="bg-white z-10 relative  shadow-zinc-500  shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden lg:w-full sm:w-1/2 h-[390px]">
//             <img src={dest.coverPhoto ||img1} alt={dest.city} className="w-full h-[268px] " />
//             <div className="p-4">
//             <div className='flex justify-between items-center mb-3'>

//            <div className='flex justify-start items-center gap-2 text-2xl'> <GiCommercialAirplane className='text-xl'/><h3 className="text-lg text-gray-500 font-semibold">{dest.destinationName||"cairo"}</h3></div>
//            <div className='flex gap-1'> 
// </div>
//             </div>

//              <div className='flex justify-start items-center gap-1 text-2xl'><h6 className=" text-gray-500 text-lg  font-normal">{dest.numberOfTrips}</h6>
//           <p className='text-gray-500 text-lg  font-normal'>:عدد الرحلات</p></div>
//             </div>
//           </div></Link>
//         ))}
//       </div>
//       <img className="absolute top-1/4 custom-bounce  left-[6%]" src={img4} alt="image1"/>
     
//       <img className="absolute top-[85%] custom-bounce1 z-0   left-[55%]" src={img6} alt="image4"/>
//       <img className="absolute top-[50%] custom-bounce right-[100px]" src={img5} alt="image5"/>
//     </section>
//   );
// };

// export default Destinations;

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image_1 from '../../../Assets/destination1.png' 
// import image_2 from '../../../Assets/destination3.jpg'
// import image_3 from '../../../Assets/destination4.jpg'
// import image_4 from '../../../Assets/destination2.png'
// import image_5 from '../../../Assets/destination5.png'
// import image_6 from '../../../Assets/mrsa_mtrwh_4a2989af89.webp'
// import image_7 from '../../../Assets/Home_2.jpg'
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchalldestination } from "../../../store/destinationslic";
// const destinations = [
//   {
//     image: image_1,
//     title: "Aswan",
//     tours: "5 Tours"
//   },
//   {
//     title: "Cairo",
//     image: image_2,
//     tours: "7 Tours",
//   },
//   {
//     title: "Hurghada",
//     image: image_3,
//     tours:"9 Tours",
//   },
//   {
//   image: image_4,
//   title: "Luxor",
//   tours: "10 Tours"
//   },
//   {
//     title: "Marsa Alam",
//     image: image_5,
//     tours: "11 Tours",
//   },
  
//   {
//     title: "Mersa Matruh",
//     image:image_6,
//     tours: "6 Tours",
//   },
//   {
//     title: "Sharm El-Sheikh",
//     image:image_7,
//     tours: "19 Tours",
//   },
// ];

export default function Destinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId;
    let scrollSpeed = 0.5;

    const scroll = () => {
      container.scrollLeft += scrollSpeed;
      // عند نهاية السكشن الأول، نرجع للبداية بدون تقطيع
      if (
        container.scrollLeft >=
        container.scrollWidth / 2
      ) {
        container.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

const dispatch=useDispatch()
useEffect(()=>{dispatch(fetchalldestination())},[])
const {list}=useSelector((state)=>state.destinations)

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
  };

  return (
    
    <div className="relative w-full py-10 mt-10">
      <div className="flex justify-between items-center px-10">
        <div className="mx-12">
          <h2 className="text-3xl font-serif mb-1">
            Unveiling Exquisite Treasures
          </h2>
          <p className="text-slate-700 text-lg mt-2 ml-2">
            Unlock Secret Gems for Unforgettable Discoveries in Egypt
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <button
              onClick={goToPrev}
              className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={goToNext}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-600 text-white hover:bg-orange-700"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="">
          <Link to={'/Topdestinations'}><span className="hover:text-orange-600">View All Destinations</span></Link>
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden px-5">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          ref={scrollRef}
          style={{
            transform: `translateX(-${currentIndex * 20}%)`,
            width: `${list.length * 9}%`,
          }}
        ><div className=' flex gap-5 mx-14 mt-8'>
          {[...list].map((dest, index) => (
            
    <Link to={`/TourCard/${dest.destinationId}`}> 
        
        <div key={index} className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-o transition-shadow duration-300 group w-[320px] h-[340px]`}>
      <img
        src={dest.coverPhoto||image_1}
        alt={dest.destinationName}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div > 
        cvf
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition duration-300" />

      <div className="absolute w-full text-center bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl font-semibold group-hover:-translate-y-4 transition duration-300 mb-2">
        {dest.destinationName}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-opacity duration-300">
        {dest.numberOfTrips} 
      </div>
    </div>
    </Link>
          )
          
          
          )}</div>
        </div>
      </div>
    </div>
  );
}