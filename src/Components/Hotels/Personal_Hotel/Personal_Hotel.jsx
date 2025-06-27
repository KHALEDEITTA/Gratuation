import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneTrip } from '../../../store/trip/tripslic';
import { Link, useParams } from 'react-router';
import img1 from '../../../Assets/d1.jpeg'
import img2 from '../../../Assets/d1.jpeg'
import img3 from '../../../Assets/d1.jpeg'
import img4 from '../../../Assets/d1.jpeg'
import { Calendar, Users, Clock, MapPin, CheckCircle } from "lucide-react";


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
    {/* <div className="relative  h-[25rem] w-full">
        <img
        src={header}
        alt="About Background"
        className="w-full h-full object-center"
        />  
        
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-5">
            <p className="text-white text-4xl ml-8 font-bold w-1/3">Gravity Hotel & Aqua Park Sahl Hasheesh</p>
        </div>
        
    </div> */}

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
    

    <div className="bg-white py-10 px-4 md:px-20 text-gray-800">
 
      <h2 className="text-4xl font-serif mb-8 flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-red-700 lucide lucide-book-text-icon lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg>       
          Highlights
      </h2>

      <div className="flex justify-center items-center"> <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center text-sm mb-8">
        <div className="flex flex-col items-center gap-3">
          <span className="text-2xl text-black text-opacity-75 font-semibold">Location</span>
          <span className="text-gray-500 text-lg flex gap-2"><MapPin className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold"> Location</span> </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl text-black text-opacity-75 font-semibold">Duration</span>
          <span className="text-gray-600 text-lg"></span>
          <span className="text-gray-500 text-lg flex gap-2"><Clock className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold"> Duration</span> </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-2xl text-black text-opacity-75 font-semibold">Run</span>
          <span className="text-gray-500 text-lg flex gap-2"><Calendar className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold"> Run</span> </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-2xl text-black text-opacity-75 font-semibold">Group Size</span>
          <span className="text-gray-500 text-lg flex gap-2"><Users className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold">SIze</span> </span>
        </div>
      </div>

     
   
      
      </div>
    </div>
    <hr className="w-[60%] m-auto" />
  
    <Link 
      className="m-auto w-[20% ] flex justify-center "
      to={`/TourDetails/Personal_Information`}>
        
      <button class="group mb-12 mt-9 relative h-16 w-72 overflow-hidden rounded-xl bg-white text-xl font-serif shadow-2xl shadow-red-100">
        <div class="absolute inset-0 w-12 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-black group-hover:text-white">Proceed to Booking</span>
      </button>
    </Link>


    <div className="px-4 md:px-20 py-8 max-w-4xl">
  <h2 className="mb-6 text-3xl text-black text-opacity-75 font-semibold">Tour description</h2>
  <p className="mb-4 font-serif ml-5 text-gray-500 text-lg leading-relaxed">
   kkkkkkkkkkk
  </p>
</div>

<div className="px-4 md:px-20 py-8 text-gray-800 max-w-4xl space-y-8">


  <div>
    <h2 className="font-serif text-2xl text-black text-opacity-75 font-semibold mb-4">Inclusions</h2>
    <ul className="list-disc space-y-1 ml-6 text-lg mb-4 font-serif text-gray-500 leading-relaxed">
    
      <li>Hotel pick-up and drop-off</li>
      <li>Entrance fees</li>
      <li>Certified Egyptologist</li>
      <li>Insurance</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-serif font-semibold mb-4 text-black text-opacity-75">Exclusions</h2>
    <ul className="list-disc space-y-1 ml-6 mb-4 text-lg font-serif text-gray-500 leading-relaxed">
      <li>Lunch or Drinks</li>
    </ul>
  </div>
  <div>
    <h2 className="text-2xl font-serif font-semibold mb-4 text-black text-opacity-75">Meeting point</h2>
    <p className="list-disc space-y-1 ml-5 mb-4 font-serif text-lg text-gray-500 leading-relaxed">Meeting</p>
  </div>


  <div>
    <h2 className="text-2xl font-serif font-semibold mb-4 text-black text-opacity-75">Know in advance</h2>
    <ul className="list-disc space-y-1 ml-6 mb-4 font-serif text-lg text-gray-500 leading-relaxed">
      <li>
        Please wear comfortable clothes, and bring your hat, sunglasses, water, camera and money for shopping and tipping.
      </li>
      <li>
        Please leave your accommodation and contact details during booking process.
      </li>
      <li>
        Travco Team will contact you 24 hours prior tour date to reconfirm the pickup time and locations.
      </li>
      <li>
        For further assistance, you can communicate with the team directly at any time.
      </li>
    </ul>
  </div>
  <div>
    <h2 className="text-2xl font-serif font-semibold mb-4 text-black text-opacity-75">Cancellation policy</h2>
    <p className="list-disc space-y-1 ml-6 mb-4 font-serif text-lg text-gray-500 leading-relaxed">xcxzzzz</p>
  </div>
</div>

    </>
  )
}
