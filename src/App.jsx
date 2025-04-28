import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import SignUp from './Components/Login/SignUp.jsx'
import About from './Components/About/About.jsx'
import Footer from './Components/Footer/Footer.jsx'
import NavBar from './Components/Navbar/NavBar.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'


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
    </Routes>
    <Footer />
    </BrowserRouter>
      
    
    </>
  )
}

export default App
