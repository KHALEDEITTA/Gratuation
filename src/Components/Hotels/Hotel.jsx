import React, { useState } from 'react'
import header from '../../Assets/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg'
import { FaMapMarkerAlt, FaCalendarAlt, FaHome, FaUser } from "react-icons/fa";

export default function Hotel() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [nationality, setNationality] = useState("");
  return (
    <>
      <div className="relative  h-[25rem] w-full">
            <img
            src={header}
            alt="About Background"
            className="w-full h-full object-center"
          />  
      </div>

      <div className='mt-16 px-28'>
      <div className="bg-white shadow-xl  rounded-xl drop-shadow-xl py-10 px-10  flex flex-wrap items-center justify-between gap-4">
      {/* Destination */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Destinations</label>
        <div className="flex items-center gap-2 border-b pb-1">
          <FaMapMarkerAlt className="text-red-600" />
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="outline-none"
          >
            <option value="">Select Destination</option>
            <option value="dubai">Dubai</option>
            <option value="riyadh">Riyadh</option>
          </select>
        </div>
      </div>

      {/* Start Date */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Start Date</label>
        <div className="flex items-center gap-2 border-b pb-1">
          <FaCalendarAlt className="text-red-600" />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="outline-none"
          />
        </div>
      </div>

      {/* End Date */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">End Date</label>
        <div className="flex items-center gap-2 border-b pb-1">
          <FaCalendarAlt className="text-red-600" />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="outline-none"
          />
        </div>
      </div>

      {/* Rooms */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Rooms</label>
        <div className="flex items-center gap-2">
          <FaHome className="text-red-600" />
          <span>{rooms}</span>
          <FaUser className="text-red-600 ml-3" />
          <span>+{guests}</span>
        </div>
      </div>

      {/* Nationality */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Nationality</label>
        <div className="border-b pb-1">
          <select
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="outline-none"
          >
            <option value="">Select</option>
            <option value="saudi">Saudi</option>
            <option value="egyptian">Egyptian</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button className="bg-red-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 10.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
        </svg>
        Search
      </button>
    </div>
      </div>

      <div className='text-left px-28 mt-16'>
        <p className='text-4xl text-center text-gray-800 mb-6'>Hotels</p>
        <p className='mb-5 text-xl text-gray-600'>Got your flights sorted and just need to book a hotel in Egypt? We have got you covered at Travco Travel Company of Egypt!</p>
        <p className='mb-5 text-xl text-gray-600'>Our extensive selection of hotels across Egypt caters to every traveler’s needs and budget. Whether you are planning a beach escape in Sharm El Sheikh, Hurghada, Soma Bay, or Almaza Bay, a cultural adventure in Luxor, or a city break in Cairo, we have something for every type of traveler.</p>
        <p className='mb-5 text-lg text-gray-600'>Looking for luxury or budget-friendly options? You can easily browse our collection with user-friendly filters that let you search by star rating, board basis, location, and more. Whether it is a family-friendly resort, an All-Inclusive retreat, or a cozy boutique hotel, there is something for everyone.</p>
        <p className='mb-5 text-md text-gray-600'>No matter the season, Egypt offers endless possibilities. From soaking up the Red Sea’s year-round sunshine to exploring the rich history of the Nile Valley, we will help you find the perfect place to stay. So, get ready to explore Egypt’s treasures—start your hotel search with Travco Travel Company of Egypt today!</p>
      </div>
    

    </>
  )
}
