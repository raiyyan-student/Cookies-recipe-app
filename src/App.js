import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/testimonials' element={<Testimonials/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App