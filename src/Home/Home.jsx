import React from 'react'
import NavBar from '../Navbar/NavBar'
import Slide from '../Slider/Slide'
import Filter from '../Filter/Filter'
import Service from '../Service/Service'
import Destinations from '../Destinations/Destinations'
import Footer from '../Footer/Footer'


export default function Home() {
    return (
        <><div>
            <NavBar />
        </div>
        <div className='mt-24'>
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
        <Footer />
        
      
        </>
    )
}
