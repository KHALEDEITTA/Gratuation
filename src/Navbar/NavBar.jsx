import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router'
// import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
// import styled from 'styled-components';
import logo from "../data/p2.jpg"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

  

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
      
        {/* logo */}
      <Link to={"/Travel"}>
      <img src={logo} alt="imag" className='h-16 w-auto rounded-md' />
      </Link>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 rtl:space-x-reverse font-medium justify-center ">
        <li className="cursor-pointer transition">
          <Link className='no-underline text-gray-700 hover:text-orange-600'>Home</Link> 
          </li>
          <li className="cursor-pointer transition">
            <Link className='no-underline text-gray-700 hover:text-orange-600'>About</Link> 
            </li>
          <li className="cursor-pointer transition">
            <Link className='no-underline text-gray-700 hover:text-orange-600'>Tours</Link> 
            </li>
          <li className="cursor-pointer transition">
            <Link className='no-underline text-gray-700 hover:text-orange-600'>Content US</Link>
            </li>
          <li className="cursor-pointer transition">
            <Link className='no-underline text-gray-700 hover:text-orange-600'>Booking</Link>
            </li>
        </ul>

        <div className='flex justify-between'> 
            
            <Link 
            className="py-2 px-4 overflow-hidden rounded-xl bg-orange-50 bg-opacity-10 text-lg mr-1  text-black no-underline border-2 border-orange-300 hover:bg-orange-600 hover:text-slate-50 hover:border-orange-600"
            to={'/login'}>
              Login  
            </Link>
            <Link 
            className="py-2 px-3 overflow-hidden rounded-xl bg-orange-50 text-lg bg-opacity-10 text-black hover:text-slate-50 hover:bg-orange-600  no-underline border-2 border-orange-300 hover:border-orange-600"
            to={'/signup'}>
              Sign Up
            </Link>
          
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (<>
        <ul className="md:hidden bg-white px-4 pb-4 space-y-4 text-gray-700 font-medium shadow-md">
          <li className="hover:text-sky-900 cursor-pointer transition">Home</li>
          <li className="hover:text-sky-900 cursor-pointer transition">About</li>
          <li className="hover:text-sky-900 cursor-pointer transition">Tours</li>
          <li className="hover:text-sky-900 cursor-pointer transition">Content US</li>
          <li className="hover:text-sky-900 cursor-pointer transition">Booking</li>
          
            
        </ul>
      </>)}

    </nav>
  );
  
}
