import React, { useState } from 'react';

const HotelCard = ({ hotel, setPage }) => {
  const [showRooms, setShowRooms] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 relative mb-6">
      <div className="absolute top-4 right-4 flex flex-col text-lg font-semibold text-red-600 px-5 pb-4 border-l border-gray-400">
        <p className='text-black text-center'>From</p>
        <p className='text-2xl text-center py-1'>${hotel.hotelAveragePrice}</p>
        <button
          onClick={() => setShowRooms(!showRooms)}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          <p className='flex gap-2'>
            Rooms
            {showRooms ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m18 15-6-6-6 6" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            )}
          </p>
        </button>
      </div>

      <div className="flex gap-4">
        <img src={hotel.hotelCoverPhoto} alt={hotel.hotelName} className="w-40 h-40 rounded-xl object-cover" />
        <div className="flex items-center">
          <div>
            <h2 className="text-2xl font-serif hover:text-red-600">{hotel.hotelName}</h2>
            <p className="text-gray-500 flex gap-1 my-2">
              <svg width="23" height="23" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 5-5.5 10-8 12-2.5-2-8-7-8-12a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {hotel.hotelAddress}
            </p>
          </div>
        </div>
      </div>

      {showRooms && hotel?.roomCards?.map((room, idx) => (
        <div key={idx} className="mt-4 border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="font-serif text-xl">Room Type: {room.type}</span>
            <span>
              <p className="text-xl text-red-600 text-center py-1">${room.price}</p>
              <button onClick={() => setPage(3)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                Book now
              </button>
            </span>
          </div>
          <hr className="w-[50%] m-auto my-2" />
        </div>
      ))}
    </div>
  );
};

export default HotelCard;
