import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import img1 from '../../Assets/d1.jpeg'
import img2 from '../../Assets/d1.jpeg'
import { useParams } from 'react-router';
import { Calendar, Users, Clock, MapPin } from "lucide-react";
import { Link } from 'react-router';
import { ChevronDown, ChevronUp } from "lucide-react";
import { fetchOneNileCruise } from '../../store/nile_Curises/Nile_Cruisesslic';
const itineraryData = [
  {
    day: "Day 1",
    title: "Arrival in Cairo",
    details: "Meet at airport, hotel transfer, evening dinner cruise on Nile."
  },
  {
    day: "Day 2",
    title: "Giza Pyramids Tour",
    details: "Visit the Great Pyramids, Sphinx, and Egyptian Museum."
  },
  {
    day: "Day 3",
    title: "Free Day",
    details: "Relax at the hotel or explore local markets."
  }
];

export default function TourNile() {

     const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

    const [currentIndex, setCurrentIndex] = useState(0); 
    const {currentCruise}=useSelector((state)=>state.Cruises)
    const param=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchOneNileCruise(param.id))
        },[])
        
    const images = currentCruise?.images.length?    currentCruise?.images :[img1,img2,img1,img2];
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
    <div className="relative h-[75vh]">
    {/* {currentCruise} */}
        <img
            src={currentCruise?.coverPhoto || img1}
        //   .coverImage
            alt="Khan El Khalili"
            className="w-full h-full object-cover"
        />
      </div>

      <div className="px-10 ml-2 py-4 mb-5 text-lg text-gray-600 space-x-2 ">
                  <Link to={'/'} className='px-3 hover:text-slate-800'>Home</Link> {'>'} 
                  <Link to={'/NileCruises/:id'} className='px-3 hover:text-slate-800'><span>Nile Cruises
          </span></Link> {'>'} <span className='px-2 text-slate-700 font-semibold'>{currentCruise?.label||'empty'}</span>
              </div>

    
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="text-xl md:text-2xl font-semibold max-w-[70%] ml-14">
        {currentCruise?.label}
       
       
        </h1>
        <div className="text-red-600 text-sm font-semibold flex items-center gap-1">
          <svg
            className="w-5 h-5 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-4.553a1 1 0 00-1.414-1.414L13.586 8.586a2 2 0 00-.586 1.414V11a1 1 0 001 1h1a2 2 0 001.414-.586z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4h16v16H4z"
            />
          </svg>
          (+202) 3854 1010
        </div>
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
              src={images[currentIndex].imageUrl}
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
            <span className="text-gray-500 text-lg flex gap-2"><MapPin className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold">{currentCruise?.location}</span> </span>
        </div>

        <div className="flex flex-col items-center gap-2">
            <span className="text-2xl text-black text-opacity-75 font-semibold">Cabins Number</span>
            <span className="text-gray-600 text-lg"></span>
            <span className="text-gray-500 text-lg flex gap-2"><Clock className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold">{currentCruise?.cabinNumbers}</span> </span> 
        </div>

        <div className="flex flex-col items-center gap-3">
            <span className="text-2xl text-black text-opacity-75 font-semibold">Number of Decks</span>
            <span className="text-gray-500 text-lg flex gap-2"><Calendar className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold">{currentCruise?.decksNumber}</span> </span>
        </div>

        <div className="flex flex-col items-center gap-3">
            <span className="text-2xl text-black text-opacity-75 font-semibold">price </span>
            <span className="text-gray-500 text-lg flex gap-2"><Users className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold">{currentCruise?.price}</span> </span>
        </div>
    </div>

    
        </div>
    </div>
    <hr className="w-[60%] m-auto" />

    <Link 
        className="m-auto w-[20% ] flex justify-center "
        to={`/TourDetails/${currentCruise}/Personal_Information`}>{/*.tripId */}
        
        <button className="group mb-12 mt-9 relative h-16 w-72 overflow-hidden rounded-xl bg-white text-xl font-serif shadow-2xl shadow-red-100">
            <div className="absolute inset-0 w-12 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">Proceed to Booking</span>
        </button>
    </Link>

    
    <>
        <div className="max-w-3xl mx-auto my-12 px-4">
            <div className='flex gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-icon lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>
            <h2 className="text-3xl text-gray-800 font-serif mb-6 text-left">Itinerary</h2>
            </div>

      {currentCruise?.itineraries?.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-xl mb-4 shadow-md"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300"
            onClick={() => toggle(index)}
          >
            <div>
                <p className="text-lg font-semibold ">{item.label}</p>
            
            </div>
            <div className="text-red-700">
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
          </button>

          {activeIndex === index && (
            <div className="p-4 bg-white text-gray-800 text-md font-serif px-7 transition-all duration-300">
              {

                item.durations.map((item)=>(
                   <ol>
                    <li className='font-bold text-md my-2'>{item.label}</li>
                    <li>{item.description}</li>
                </ol>
                ))
              }
               
                
            </div>
          )}
        </div>
      ))}
    </div>
    </>
    
    </>
  )
}
