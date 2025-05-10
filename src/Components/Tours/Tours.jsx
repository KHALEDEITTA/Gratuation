import React from 'react'
import tour from '../../Assets/tour_1.jpg'
import ToursList from './ToursList/ToursList';

export default function Tours() {
    return (
    <>
        <div className="relative h-[40rem] bg-cover bg-center" style={{ backgroundImage: `url('${tour}')` }}>
        
          <div className="absolute inset-0 bg-black bg-opacity-5"></div>
    
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
            {/* Tabs */}
            
            <div className="bg-white rounded-t-xl flex justify-start items-start px-6 py-3 bg-opacity-70  gap-10 font-semibold text-lg shadow-md">
                <button className="text-gray-800 border-b-4 ">Suggested Tours</button>
                {/* <button className="text-gray-500 hover:text-gray-800">Create Own Tour</button> */}
            </div>
    
            {/* Search Bar */}
            <div className="bg-white rounded-2xl bg-opacity-70 w-full max-w-5xl mt-0 flex items-center justify-between gap-6 p-7 shadow-lg">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 outline-none px-4 py-2 text-gray-700 rounded-lg"
              />
    
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className='mt-20 grid grid-cols-3 gap-2 p-10'>
            <ToursList />
            <ToursList />
            <ToursList />
            <ToursList />
            <ToursList />
            <ToursList />
        </div>
    </>
      );
}
