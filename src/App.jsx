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
import ProtectedRoute from './protectedroute.jsx'
import TopDestinations from './Components/TopDestinations/TopDestinations.jsx'

import { ToastContainer } from "react-toastify";
import Payment from './Components/payment/payment.jsx'
import Cart from './Components/bookingCart/bookingCart.jsx'
import 'aos/dist/aos.css';
import TravcoPage from './Components/tour/tour.jsx'
import NileCruises from './Components/Nile Cruises/Nile_Cruises.jsx'
import TourNile from './Components/TourNile/TourNile.jsx'
import Hotel_Information from './Components/Hotels/Hotel_Information/Hotel_Information.jsx'
import Personal_Hotel from './Components/Hotels/Personal_Hotel/Personal_Hotel.jsx'
import Personal_InformationForNile from './Components/TourNile/personalinformation_for_nileCursies.jsx'
function App() {
  

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>    <Home /></ProtectedRoute>
    

        } />
      <Route path='/login' element={<Login />
 } />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={   <ProtectedRoute> <About  /> </ProtectedRoute>} />
      <Route path='/contactus' element={    <ProtectedRoute><ContactUs /></ProtectedRoute>} />
      <Route path='/TourDetails/:id' element={    <ProtectedRoute><TourDetails /></ProtectedRoute>} />
      <Route path='/TourDetails/:id/Personal_Information' element={   <ProtectedRoute><Personal_Information /> </ProtectedRoute>} />
      <Route path='/ForNileDetails/:id/Personal_InformationForNile' element={   <ProtectedRoute><Personal_InformationForNile /> </ProtectedRoute>} />
      <Route path='/Hotels' element={   <ProtectedRoute><Hotel /> </ProtectedRoute>} />
      <Route path='/TourCard/:id' element={  <ProtectedRoute><TourCard />  </ProtectedRoute>} />
      <Route path='/TopDestinations' element={  <ProtectedRoute><TopDestinations />  </ProtectedRoute>} />
      <Route path='/Tours' element={ <ProtectedRoute><Tours />  </ProtectedRoute>} /> 
      <Route path='/TourDetails/payment/' element={ <ProtectedRoute><Payment />  </ProtectedRoute>} /> 
      <Route path='/Tourss/' element={ <ProtectedRoute><TravcoPage />  </ProtectedRoute>} /> 
      <Route path='/cart/' element={ <ProtectedRoute><Cart />  </ProtectedRoute>} /> 
      {/* <Route path='/DestinationGuide' element={ <Desti><Tours />  </ProtectedRoute>} />  */}
      <Route path="*" element={<div>Not Found</div>} />
      <Route path="/NileCruises" element={<NileCruises />} />
      <Route path="/Hotel" element={<Hotel />} />
      <Route path="/NileCruises/:id" element={<TourNile />} />
      <Route path="/Hotelinformation" element={<Hotel_Information/> } />
      <Route path="/PersonalHotel" element={<Personal_Hotel/> } />

    </Routes>
    <Footer />
    </BrowserRouter>
      
    
    </>
  )
}

export default App
