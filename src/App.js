import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hero from './components/Hero'
import 'remixicon/fonts/remixicon.css'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hero/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App