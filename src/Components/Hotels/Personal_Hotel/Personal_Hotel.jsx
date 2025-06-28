import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneTrip } from '../../../store/trip/tripslic';
import { Link, useParams } from 'react-router';
import img1 from '../../../Assets/d1.jpeg'
import img2 from '../../../Assets/d1.jpeg'
import img3 from '../../../Assets/d1.jpeg'
import img4 from '../../../Assets/d1.jpeg'
import { Calendar, Users, Clock, MapPin, CheckCircle } from "lucide-react";
import header from '../../../Assets/Banner-Hotel-Booking.jpg'


export default function Personal_Hotel() {
      const param=useParams()
  const [currentIndex, setCurrentIndex] = useState(0); 
 const dispatch=useDispatch()
  useEffect(()=>{
dispatch(fetchOneTrip(param.id))

  },[])
const {currentTrip}=useSelector((state)=>state.trip)
 
  const images = currentTrip?.tripImages.length?    currentTrip?.tripImages :[img1,img2,img3,img4]; 

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
    <div className="relative  h-[25rem] w-full">
        <img
        src={header}
        alt="About Background"
        className="w-full h-full object-center"
        />  
        
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-5">
            <p className="text-white text-4xl ml-8 font-bold w-1/3">Gravity Hotel & Aqua Park Sahl Hasheesh</p>
        </div>
        
    </div>

        <div className="flex items-center justify-center space-x-6 mt-10 ">

        <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
                ✓
            </div>
            <p className="mt-2">Choose Data</p>
        </div>


        <div className="w-32 h-1 bg-red-600 mb-6" />


        <div className="flex flex-col items-center ">
            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
                ✓
            </div>
            <p className="mt-2">Chooses Rooms</p>
        </div>

        <div className="w-32 h-1 bg-gray-200 mb-6" />

        <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
                ✓
            </div>
            <p className="mt-2">Personal Information</p>
        </div>
    
        <div className="w-32 h-1 bg-gray-200 mb-6" />
        
        <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-gray-400 text-gray-700 flex items-center justify-center">
                4
            </div>
            <p className="mt-2">Booking</p>
        </div>
        <div className="w-32 h-1 bg-gray-200 mb-6" />

    
        <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-gray-400 text-gray-700 flex items-center justify-center">
                5
            </div>
            <p className="mt-2">Booking Completed!</p>
        </div>
    </div>

    <div className='my-2 mt-5 mx-36'>
        <h1 className='text-2xl font-semibold font-serif text-gray-700 my-1'>Gravity Hotel & Aqua Park Sahl Hasheesh</h1>
        <p className='text-gray-500 font-serif ml-1 flex gap-1'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            Sahl Hasheesh, Hurghada, Red Sea
        </p>
    </div>

    <div className="bg-white py-8 px-4 md:px-20">
    
        <div className="flex flex-colw-full md:flex-row gap-6">
            <button
            onClick={prevImage}
            className="transform translate-y-72 w-11 h-11 text-lg bg-white rounded-full shadow-md hover:shadow-lg hover:bg-red-600 hover:text-white text-red-600"
            >
                &#x276E;
            </button>
            <div className="relative w-full md:w-2/4 h-[20%]">
                <img
                src={images[currentIndex]}
                alt="Main Tour"
                className="w-[100%] m-auto rounded-xl "
                />
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-sm shadow rounded">
                    {currentIndex + 1} / {images.length}
                </div>
            
            </div>
            <button
                          onClick={nextImage}
                          className="transform translate-y-72 w-11 h-11 text-lg bg-white rounded-full shadow-md hover:shadow-lg hover:bg-red-600 hover:text-white text-red-600"
                        >
                          &#x276F;
                        </button>



          <div className="hidden md:flex flex-col gap-2 w-1/4">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb-${i}`}
                onClick={() => selectImage(i)}
                className={`w-full h-28 object-cover rounded cursor-pointer border ${
                  i === currentIndex ? "border-red-500" : "border-transparent"
                } hover:border-red-500`}
              />
            ))}
          </div>
        </div>
      </div>
    

    <div className="bg-white py-10 px-4 md:px-20 text-gray-800 flex flex-col">
 
      <h2 className="text-4xl font-serif mb-5 flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-red-700 lucide lucide-book-text-icon lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg>       
          Hotel Overview
      </h2>
      <h3 className='text-xl text-gray-600 font-serif ml-14'text-4xl font-serif>Gravity Hotel & Aqua Park Sahl Hasheesh</h3>
    </div>
    <hr className="w-[60%] m-auto" />
  
    <Link 
      className="m-auto w-[20% ] flex justify-center "
      to={`/Hotelinformation`}>
        
      <button class="group mb-12 mt-9 relative h-16 w-72 overflow-hidden rounded-xl bg-white text-xl font-serif shadow-2xl shadow-red-100">
        <div class="absolute inset-0 w-12 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-black group-hover:text-white">Proceed to Booking</span>
      </button>
    </Link>

    <hr className="w-[60%] m-auto" />


    

<div className="px-4 md:px-20 py-8 text-gray-800  space-y-8">


  <div className=''>
    <h2 className="font-serif text-3xl text-black text-opacity-85 mb-8">Most popular facilities</h2>
    <ul className="list-disc ml-6 text-lg mb-4 font-serif marker:text-red-700 gap-5 grid grid-cols-3 text-gray-600 leading-relaxed">
    
      <li>Hotel pick-up and drop-off</li>
      <li>Entrance fees</li>
      <li>Certified Egyptologist</li>
      <li>Insurance</li>
      <li>Transfer service</li>
      <li>Multiligual staff</li>
      <li>Wheelchair accessible</li>
      <li>Car hire</li>
      <li>Sandy beach</li>
    </ul>
  </div>
  
  
</div>

    </>
  )
}
