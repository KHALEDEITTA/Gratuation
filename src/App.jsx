import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import SignUp from './Components/Login/SignUp.jsx'
import About from './Components/About/About.jsx'
import Footer from './Components/Footer/Footer.jsx'
import NavBar from './Components/Navbar/NavBar.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import TourDetails from './Components/Tour Details/TourDetails.jsx'
import Personal_Information from './Components/Tour Details/Personal_Information.jsx'
import Hotel from './Components/Hotels/Hotel.jsx'
import TourCard from './Components/TourCard/TourCard.jsx'
import Tours from './Components/Tours/Tours.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={<About />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/TourDetails' element={<TourDetails />} />
      <Route path='/Personal_Information' element={<Personal_Information />} />
      <Route path='/Hotels' element={<Hotel />} />
      <Route path='/TourCard' element={<TourCard />} />
      <Route path='/Tours' element={<Tours />} />
    </Routes>
    <Footer />
    </BrowserRouter>
      
    
    </>
  )
}

export default App
