import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import Watchlist from './pages/Watchlist'
import Navbar from './pages/Navbar'
import Home from './pages/Home'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/watchlist' element={<Watchlist/>}/>


      </Routes>      
    </BrowserRouter>
  )
}

export default App
