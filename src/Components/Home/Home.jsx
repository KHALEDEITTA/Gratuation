import React from 'react'
import NavBar from './../Navbar/NavBar'
import Slide from './Slider/Slide'
import Filter from './Filter/Filter'
import Service from './Service/Service'
import Destinations from './Destinations/Destinations'
import TopDestinations from '../TopDestinations/TopDestinations'
import AOS from 'aos';
import { useEffect } from 'react'
import Comments from './Comments/Comments'
import Logo from './LogoFooter/Logo'
import UpFoot from './UpFooter/UpFoot'



export default function Home() {

    useEffect(() => {
        AOS.init({
        duration: 1000, // المدة الافتراضية للتأثيرات
        once: true,     // التأثير يحصل مرة واحدة فقط
    });
}, []);

    return (
        <>
        <div >
            <Slide  />
        </div>
        <div>
            <Filter />
        </div>
        <div>
            <Service />
        </div>
        <div>
            <Destinations />
        </div>
        <Comments />
        <Logo />
        <UpFoot />
        
        </>
    )
}
