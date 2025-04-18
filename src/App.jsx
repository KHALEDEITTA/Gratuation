import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Home/Home'
import Login from './Login/Login.jsx'

import SignUp from './Login/SignUp.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
      
    
    </>
  )
}

export default App
