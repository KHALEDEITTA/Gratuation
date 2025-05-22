import React, { useEffect } from 'react';
import img1 from '../../../Assets/d1.jpeg'
import img4 from '../../../Assets/download (3).png'
import img5 from '../../../Assets/download (4).png'
import img6 from '../../../Assets/download (7).png'
import '../../../App.css'
import img2 from '../../../Assets/edinburgh-castle-guide-feautred-guide.webp'
import img3 from '../../../Assets/d1.jpeg'
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchalldestination } from '../../../store/destinationslic';
const destinations = [
  { city: 'London, UK', price: '$4.2k', days: '12 Days Trip', img: img1 },
  { city: 'Rome, Italy', price: '$3.42k', days: '10 Days Trip', img: img2},

  { city: 'Full Europe', price: '$15k', days: '28 Days Trip', img: img3 },
];

const Destinations = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchalldestination())
    
  })
  const {list}=useSelector((state)=>state.destinations)
  return (
    <section className="py-12 flex flex-col Destination relative  items-center justify-center px-6 bg-gray-50">

      <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Top Destinations</h2>
      <div className="grid lg:w-3/4 grid-cols-1 md:grid-cols-3  gap-12">
        {destinations.map((dest, index) => (
          <div key={index} className="bg-white z-10 relative  shadow-zinc-500  shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden lg:w-full sm:w-1/2 h-[390px]">
            <img src={dest.img} alt={dest.city} className="w-full h-[268px] " />
            <div className="p-4">
            <div className='flex justify-between items-center mb-3'>

           <div className='flex justify-start items-center gap-2 text-2xl'> <GiCommercialAirplane className='text-xl'/><h3 className="text-lg text-gray-500 font-semibold">{dest.city}</h3></div>
            <p className=" text-gray-500 text-lg  font-normal">{dest.price}</p>
            </div>

             <div className='flex justify-start items-center gap-1 text-2xl'><FaHome  className='text-xl'/> <p className=" text-gray-500 text-sm">{dest.days}</p></div>
            </div>
          </div>
        ))}
      </div>
      <img className="absolute top-1/4 custom-bounce  left-[6%]" src={img4} alt="image1"/>
     
      <img className="absolute top-[85%] custom-bounce1 z-0   left-[55%]" src={img6} alt="image4"/>
      <img className="absolute top-[50%] custom-bounce right-[100px]" src={img5} alt="image5"/>
    </section>
  );
};

export default Destinations;