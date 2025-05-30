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


function App() {

  return (
    <>
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
      <Route path='/TourDetails' element={    <ProtectedRoute><TourDetails /></ProtectedRoute>} />
      <Route path='/Personal_Information' element={   <ProtectedRoute><Personal_Information /> </ProtectedRoute>} />
      <Route path='/Hotels' element={   <ProtectedRoute><Hotel /> </ProtectedRoute>} />
      <Route path='/TourCard/:id' element={  <ProtectedRoute><TourCard />  </ProtectedRoute>} />
      <Route path='/TopDestinations' element={  <ProtectedRoute><TopDestinations />  </ProtectedRoute>} />
      <Route path='/Tours' element={ <ProtectedRoute><Tours />  </ProtectedRoute>} /> 
      {/* <Route path='/DestinationGuide' element={ <Desti><Tours />  </ProtectedRoute>} />  */}
      <Route path="*" element={<div>Not Found</div>} />

    </Routes>
    <Footer />
    </BrowserRouter>
      
    
    </>
  )
}

export default App
