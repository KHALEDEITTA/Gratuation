import { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router";


export default function Filter() {
  
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [Childs, setChilds] = useState("");
   const [Adults, setAdults] = useState();

  return (
    <>
      <div className='mb-20 px-28'>
            <div className="bg-white shadow-2xl  rounded-xl drop-shadow-xl py-10 px-10  flex flex-wrap items-center justify-between gap-4">
            {/* Destination */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-gray-600 mb-1">Destinations</label>
              </div>
              <div className="flex gap-1">   
                <FaMapMarkerAlt className="text-red-600 mt-1" />           
                <div className="flex items-center gap-2 border-b pb-1">
                  
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="outline-none pr-4"
                  >
                    <option value="">Select Destination</option>
                    <option value="cairo">Cairo</option>
                    <option value="hurghada">Hurghada</option>
                    <option value="aswan">Aswan</option>
                    <option value="sharm el-sheikh">Sharm El-Sheikh</option>
                    <option value="luxor">Luxor</option>
                  </select>
                </div>
              </div>
            </div>
      
            {/* Date */}
            <div className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-600 mb-1">Date</label>
                </div>
                <div className="flex gap-1">
                  <FaCalendarAlt className="text-red-600 mt-1" />
                  <div className="flex items-center gap-2 border-b pb-1">
                    
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="outline-none"
                    />
                  </div>
                </div>
            </div>
      
            {/* Adults */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-gray-600 mb-1">Adults</label>
              </div>
              <div className="flex gap-1">
                <FaMapMarkerAlt className="text-red-600" />
                <div className="flex items-center gap-2 border-b pb-1">
                  
                  <select
                    value={Adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="outline-none pr-10"
                  >
                    <option value="">Select</option>
                    <option value="1_adult">1 Adults</option>
                    <option value="2_adult">2 Adults</option>
                    <option value="3_adult">3 Adults</option>
                    <option value="4_adult">4 Adults</option>
                    <option value="5_adult">5 Adults</option>
                    <option value="6_adult">6 Adults</option>
                    <option value="7_adult">7 Adults</option>
                  </select>
                </div>
              </div>
            </div>
      
            {/* Child */}
            <div className="flex flex-col gap-4">
              <label className="text-gray-600 mb-1">Child</label>
              <div className="flex gap-1">
              <FaUser className="text-red-600 mt-1" />
                <div className="border-b pb-1 ">
                  
                  <select
                    value={Childs}
                    onChange={(e) => setChilds(e.target.value)}
                    className="outline-none pe-10"
                  >
                    <option value="">0 Child</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Child</option>
                    <option value="3">3 Child</option>
                  </select>
                </div>
              </div>
            </div>
      
            {/* Search Button */}
            <Link
            to={'/TourCard'}
            className="bg-red-600 text-white px-10 py-3 rounded-lg flex items-center gap-2 hover:bg-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 10.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
              </svg>
              Search
            </Link>
          </div>
            </div>
    </>
  );
}