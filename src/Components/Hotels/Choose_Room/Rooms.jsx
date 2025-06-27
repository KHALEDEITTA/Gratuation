import React, { useEffect, useState } from 'react';

import HotelCard from '../hotelcard';
import SelectField from '../selectedField';
import InputField from '../InputField';
import { useDispatch } from 'react-redux';
import { fetchalldestination } from '../../../store/destinationslic';
import { searchHotels } from '../../../store/hotel/hotelslic';

export default function Rooms({ setPage,startDate,endData, lists, destination, list }) {
  const dispatch=useDispatch()
    
  
  const [searchTerm, setSearchTerm] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState('');
  const [destinations, setDestinations] = useState(destination);
useEffect(()=>{
      dispatch(fetchalldestination())
       dispatch(searchHotels({
        destination:destinations,
     
      }))
    },[destinations])
  // فلترة الفنادق حسب الاسم أو العنوان
  const filteredHotels = lists.filter(hotel =>
    hotel.hotelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.hotelAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* خطوات الحجز */}
      <div className="flex items-center justify-center space-x-6 mt-10">
        {["Choose Data", "Chooses Rooms", "Personal Information", "Reviews", "Booking Completed!"].map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${index < 2 ? 'bg-red-600 text-white' : 'border border-gray-400 text-gray-700'} flex items-center justify-center`}>
                {index < 2 ? '✓' : index + 1}
              </div>
              <p className="mt-2">{step}</p>
            </div>
            {index !== 4 && <div className={`w-32 h-1 ${index < 1 ? 'bg-red-600' : 'bg-gray-200'} mb-6`} />}
          </React.Fragment>
        ))}
      </div>

      {/* فورم البحث والنتائج */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 ml-6">
        <aside className="space-y-6 border p-5 rounded-2xl shadow-sm h-[700px]">
          <h1 className='text-3xl ml-2 text-gray-800'>Search</h1>

          <input
            type="text"
            placeholder="Search..."
            className="w-full border px-3 py-2 rounded-3xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <hr />

          <form className="grid grid-cols-1 gap-6">
            <SelectField
              setItem={setDestinations}
              label="Destinations"
              defualtvalue={destination}
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 mt-2" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 10c0 5-5.5 10-8 12-2.5-2-8-7-8-12a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>}
              options={list}
            />
            <SelectField
              setItem={setChild}
              label="Childs"
              options={[0, 1, 2, 3, 4]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 mt-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="10" cy="8" r="5" /><path d="M2 21a8 8 0 0 1 13.3-6" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg>}
            />
            <SelectField
              setItem={setAdult}
              label="Adults"
              options={[1, 2, 3, 4]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 mt-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="10" cy="8" r="5" /><path d="M2 21a8 8 0 0 1 13.3-6" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg>}
            />
            <InputField
              label="Check-in Date"
              type="date"
              placeholder="Select a date"
                defualtvalue={startDate}
              setItem={setBookingDate}
            />
            <InputField
              defualtvalue={endData}
              label="Check-out Date"
              type="date"
              placeholder="Select a date"
              setItem={setBookingDate}
            />
          </form>
        </aside>

        {/* نتائج البحث */}
        <div className="px-10 py-6">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Search Results: {filteredHotels.length}
          </h1>
          {filteredHotels.map((hotel, idx) => (
            <HotelCard key={idx} hotel={hotel} setPage={setPage} />
          ))}
        </div>
      </div>
    </>
  );
}
