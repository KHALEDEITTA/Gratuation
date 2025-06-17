import React, { useEffect, useState } from "react";
import img1 from '../../Assets/mrsa_mtrwh_4a2989af89.webp'
import img2 from '../../Assets/tour details.jpg'
import { Calendar, Users, Clock, MapPin, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router";
import { fetchOneTrip } from "../../store/trip/tripslic";
import { useDispatch, useSelector } from "react-redux";
export default function TourDetails() {
   const param=useParams()
  const [currentIndex, setCurrentIndex] = useState(0); 
 const dispatch=useDispatch()
  useEffect(()=>{
dispatch(fetchOneTrip(param.id))

  },[])
const {currentTrip}=useSelector((state)=>state.trip)
 
  const images = currentTrip?.tripImages.length?    currentTrip?.tripImages :[img1,img2,img1,img2]; 

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
  {
    currentTrip ?    <div className="font-sans text-gray-800">



      <div className="relative h-[75vh]">
        <img
          src={currentTrip.coverImage || img1}
          alt="Khan El Khalili"
          className="w-full h-full object-cover"
        />
      </div>


      {/* <div className="bg-gray-100 text-sm text-gray-700 px-4 py-2">
        Home &gt; Tours & Activities &gt;{currentTrip?.label||'empty'}

      </div> */}
      <div className="px-10 ml-2 py-4 mb-5 text-lg text-gray-600 space-x-2 ">
                  <Link to={'/'} className='px-3 hover:text-slate-800'>Home</Link> {'>'} 
                  <Link to={'/TourCard/:id'} className='px-3 hover:text-slate-800'><span>Tours & Activities
          </span></Link> {'>'} <span className='px-2 text-slate-700 font-semibold'>{currentTrip?.label||'empty'}</span>
              </div>

    
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="text-xl md:text-2xl font-semibold max-w-[70%] ml-14">
        {currentTrip.label}
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
          <span className="text-gray-500 text-lg flex gap-2"><MapPin className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold">{currentTrip.destination}</span> </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl text-black text-opacity-75 font-semibold">Duration</span>
          <span className="text-gray-600 text-lg"></span>
          <span className="text-gray-500 text-lg flex gap-2"><Clock className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold">{currentTrip.duration}</span> </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-2xl text-black text-opacity-75 font-semibold">Run</span>
          <span className="text-gray-500 text-lg flex gap-2"><Calendar className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold">{currentTrip.run}</span> </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-2xl text-black text-opacity-75 font-semibold">Group Size</span>
          <span className="text-gray-500 text-lg flex gap-2"><Users className="text-red-600 w-8 h-8" /><span className="mt-1 font-semibold">{currentTrip.tripType}</span> </span>
        </div>
      </div>

     
   
      
      </div>
    </div>
    <hr className="w-[60%] m-auto" />
  
    <Link 
      className="m-auto w-[20% ] flex justify-center "
      to={`/TourDetails/${currentTrip.tripId}/Personal_Information`}>
        
      <button class="group mb-12 mt-9 relative h-16 w-72 overflow-hidden rounded-xl bg-white text-xl font-serif shadow-2xl shadow-red-100">
        <div class="absolute inset-0 w-12 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-black group-hover:text-white">Proceed to Booking</span>
      </button>
    </Link>

<div className="px-4 md:px-20 py-8 max-w-4xl">
  <h2 className="mb-6 text-3xl text-black text-opacity-75 font-semibold">Tour description</h2>
  <p className="mb-4 font-serif ml-5 text-gray-500 text-lg leading-relaxed">
   {currentTrip.description}
  </p>
</div>

<div className="px-4 md:px-20 py-8 text-gray-800 max-w-4xl space-y-8">


  <div>
    <h2 className="font-serif text-2xl text-black text-opacity-75 font-semibold mb-4">Inclusions</h2>
    <ul className="list-disc space-y-1 ml-6 text-lg mb-4 font-serif text-gray-500 leading-relaxed">
      {
        currentTrip.inclusions.map((item)=>(

      <li>{item.content}</li>

        ))
      }
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
    <p className="list-disc space-y-1 ml-5 mb-4 font-serif text-lg text-gray-500 leading-relaxed">{currentTrip.meetingPoint}</p>
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
    <p className="list-disc space-y-1 ml-6 mb-4 font-serif text-lg text-gray-500 leading-relaxed">{currentTrip.cancellationPolicy}</p>
  </div>
</div>


    </div>:<div>loading</div>
  }</>
  );
}