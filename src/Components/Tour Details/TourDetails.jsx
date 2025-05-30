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
    <div className="font-sans text-gray-800">



      <div className="relative h-[75vh]">
        <img
          src={currentTrip.coverImage || img1}
          alt="Khan El Khalili"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="bg-gray-100 text-sm text-gray-700 px-4 py-2">
        Home &gt; Tours & Activities &gt;{currentTrip?.label||'empty'}

      </div>

    
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="text-xl md:text-2xl font-semibold max-w-[70%]">
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
      

     
        <div className="flex flex-col md:flex-row gap-6">
      
          <div className="relative w-full md:w-3/4">
            <img
              src={images[currentIndex]}
              alt="Main Tour"
              className="w-full rounded"
            />
            <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-sm shadow rounded">
              {currentIndex + 1} / {images.length}
            </div>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
              &#x276E;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
              &#x276F;
            </button>
          </div>


          <div className="hidden md:flex flex-col gap-2 w-1/4">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb-${i}`}
                onClick={() => selectImage(i)}
                className={`w-full h-20 object-cover rounded cursor-pointer border ${
                  i === currentIndex ? "border-red-500" : "border-transparent"
                } hover:border-red-500`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-10 px-4 md:px-20  font-sans text-gray-800">
 
      <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
     <div className="flex justify-center items-center"> <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm mb-8">
        <div className="flex flex-col items-center gap-2">
          <MapPin className="text-red-600 w-5 h-5" />
          <span className="font-medium">Location</span>
          <span className="text-gray-500">{currentTrip.destination}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Clock className="text-red-600 w-5 h-5" />
          <span className="font-medium">Duration</span>
          <span className="text-gray-500">{currentTrip.duration}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Calendar className="text-red-600 w-5 h-5" />
          <span className="font-medium">Run</span>
          <span className="text-gray-500">{currentTrip.run}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Users className="text-red-600 w-5 h-5" />
          <span className="font-medium">Group Size</span>
          <span className="text-gray-500">{currentTrip.tripType} </span>
        </div>
      </div>

     
      <div className="bg-gray-100 p-6 rounded shadow-md max-w-xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Total price</h3>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-red-600 font-medium">$ {currentTrip.price}</span>
          <span className="text-green-500 text-xl">✔</span>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Dates</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Adults</label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Child (Age: 2-5.99)
              </label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                {[...Array(6).keys()].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>{
            }
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Child (Age: 6-11.99)
              </label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                {[...Array(6).keys()].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

            <Link 
            className="mt-6 w-[70%] ml-20 text-center bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            to={`/TourDetails/${currentTrip.tripId}/Personal_Information`}
            >
            Proceed to Booking
            </Link>
        </div>
      </div></div>
    </div>

<div className="px-4 md:px-20 py-8 text-gray-800 max-w-4xl">
  <h2 className="text-2xl font-serif font-semibold mb-6">Tour description</h2>
  <p className="mb-4 font-light leading-relaxed">
   {currentTrip.description}
  </p>
</div>

<div className="px-4 md:px-20 py-8 text-gray-800 max-w-4xl space-y-8">


  <div>
    <h2 className="text-2xl font-serif font-semibold mb-4">Inclusions</h2>
    <ul className="list-disc list-inside text-sm space-y-1">
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
    <h2 className="text-2xl font-serif font-semibold mb-4">Exclusions</h2>
    <ul className="list-disc list-inside text-sm space-y-1">
      <li>Lunch or Drinks</li>
    </ul>
  </div>
  <div>
    <h2 className="text-2xl font-serif font-semibold mb-4">Meeting point</h2>
    <p className="text-sm">{currentTrip.meetingPoint}</p>
  </div>


  <div>
    <h2 className="text-2xl font-serif font-semibold mb-4">Know in advance</h2>
    <ul className="list-disc list-inside text-sm space-y-2">
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
    <h2 className="text-2xl font-serif font-semibold mb-4">Cancellation policy</h2>
    <p className="text-sm">{currentTrip.cancellationPolicy}</p>
  </div>
</div>


    </div>
  );
}