import React from 'react';
import serve1 from '../../../Assets/service1.jpg'
import serve2 from '../../../Assets/service2.jpg'
import serve3 from '../../../Assets/service3.jpg'
import serve4 from '../../../Assets/service4.jpg'

const descript = [
  {
    id:1,
    image: serve1,
    title: "Discover the wonders of Egypt",
    subtitle: "And create a lifetime of unforgettable memories.",
  },
  {
    id:2,
    image: serve2,
    title: "land of Pharaohs and Pyramids.  ",
    subtitle: "From ancient pyramids to vibrant cities.",
  },
  {
    id:3,
    image: serve3,
    title: "Relax and unwind on beautiful beaches",
    subtitle: "Let your soul soak in the serenity.",
  },
  {
    id:4,
    image: serve4,
    title: "Relax and unwind on beautiful beaches",
    subtitle: "Let your soul soak in the serenity.",
  },
];


const Service = () => {

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-xl shadow-md">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Aviation Services</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
      </div>
      
      {/* Subtitle */}
      <div className="text-center mb-10">
        <p className="text-xl text-gray-600">Fully-integrated</p>
        <p className="text-2xl font-semibold text-red-600">Solutions</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" >
        {descript.map((item)=>{
            return(
        <div className="relative group overflow-hidden rounded-lg shadow-md" key={item.id}>
          <img 
            src={item.image} 
            alt="Aviation Service 1" 
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-medium text-lg">{item.title}</span>
          </div>
        </div>)})}
      </div>
    </div>
  );
};

export default Service;