import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import 'remixicon/fonts/remixicon.css'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App