import React from 'react'
import NavBar from '../Navbar/NavBar'
import Slide from '../Slider/Slide'
import Filter from '../Filter/Filter'


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
        
      
        </>
    )
}
