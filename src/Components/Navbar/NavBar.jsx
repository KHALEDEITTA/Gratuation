import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import logo from "../../Assets/p2.jpg"
import { auth } from '../Login/firebaseConfig';
import { signOut } from 'firebase/auth';
import { LogOut, ShoppingCart, User } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { useDispatch, useSelector } from 'react-redux';
import {  logout } from '../../store/authslic';

export default function NavBar() {
   const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
  
    const [isOpen, setIsOpen] = useState(false);
const user=sessionStorage.getItem('user')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const dispatch=useDispatch()
  

  const handleLogout =  () => {
     dispatch(logout())
    setIsLoggedIn(false);
    
};
// const token =localStorage.getItem('token')
// const user =localStorage.getItem('username')
const handleLogin = () => setIsLoggedIn(true);
  // const handleLogout = () => setIsLoggedIn(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // لو نزل أكتر من 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                      scrolled ? "bg-black bg-opacity-80 shadow-md" : "bg-transparent" }`}>

      <div className="max-w-7xl mx-auto px-2 py-3 flex items-center justify-between">
      
        {/* logo */}
      <Link to={"/"}>
      <img src={logo} alt="imag" className='h-16 w-auto rounded-md' />
      </Link>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 rtl:space-x-reverse font-medium justify-center ">
        <li className="cursor-pointer transition">
          <Link className='no-underline text-white font-serif hover:text-red-600'
          to={'/'}
          >Home</Link> 
          </li>
          <li className="cursor-pointer transition">
            <Link className='no-underline text-white font-serif hover:text-red-600'
            to={'/about'}
            >About</Link> 
            </li>
          <li className="cursor-pointer transition">
            <Link className='no-underline text-white font-serif hover:text-red-600' 
            
             to={'/TourCard'}
            >Tours</Link> 
            </li>
          <li className="cursor-pointer transition">
            <Link className='no-underline text-white font-serif hover:text-red-600'
            to={'/contactus'}
            >Content US</Link>
            </li>

          <li className="cursor-pointer transition">
            <Link      to={'/cart'} className='no-underline text-white font-serif hover:text-red-600'>Booking</Link>
            </li>
            {console.log(user)}
        </ul>

        {!isAuthenticated ? (
        <div className='flex justify-between'> 
            
        <Link 
        className="py-2 px-4 overflow-hidden rounded-xl bg-orange-50 bg-opacity-5 text-lg font-serif flex  text-white no-underline border-2  hover:bg-orange-600 hover:text-slate-50 hover:border-orange-600"
        to={'/login'}
        onClick={handleLogin}>
          Login  
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out mt-1 ml-3 items-center"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
        </Link>
        {/* <Link 
        className="py-2 px-3 overflow-hidden rounded-xl bg-orange-50 text-lg bg-opacity-10 text-black hover:text-slate-50 hover:bg-orange-600  no-underline border-2 border-orange-300 hover:border-orange-600"
        to={'/signup'}
        onClick={handleLogin}>
          Sign Up
        </Link> */}
      
    </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer">
            <Avatar>
              {/* <AvatarImage src="./../data/shutterstock_1519243514_ead2797924.webp" alt="User" /> */}
              {/* <AvatarFallback>KS</AvatarFallback> */}
            </Avatar>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="size-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

            <span className="text-white font-semibold">{user?.split('@')[0]} </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 bg-white rounded-xl shadow-lg p-2 space-y-1">
            <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <User size={18} />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <ShoppingCart size={18} />
              Your Orders
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(handleLogout)}
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-red-500"
            >
              <LogOut size={18} />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
        {/* <div className='flex justify-between'> 
            
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
          
        </div> */}

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
