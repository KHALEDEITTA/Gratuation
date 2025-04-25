import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import SignUp from './Components/Login/SignUp.jsx'
import About from './Components/About/About.jsx'
import Footer from './Components/Footer/Footer.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
    </BrowserRouter>
      
    
    </>
  )
}

export default App
