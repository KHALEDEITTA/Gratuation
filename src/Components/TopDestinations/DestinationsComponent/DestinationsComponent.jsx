import React from 'react'

export default function DestinationsComponent({ image, name, tours ,color }) {
  return (
    <>
  
    <div className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-cyan-200 transition-shadow duration-300 group w-[320px] h-[340px]`}>
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div > 
        cvf
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition duration-300" />

      <div className="absolute w-full text-center bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl font-semibold group-hover:-translate-y-4 transition duration-300 mb-2">
        {name}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-opacity duration-300">
        {tours} Tours
      </div>
    </div>
 

    </>
  )
}
