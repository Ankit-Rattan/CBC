import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Main from './component/Main'
import About from './component/About'
import Footer from './component/Footer'
import Enter from './component/Enter'
import Loader from './component/Loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Center from './component/Center/Center'
import Contact from './component/Contact'
import Contactf from './component/Contactf'
import Aboutf from './component/Aboutf'


function App() {



  return (
    <div>

      <div>

      <Navbar/>

      <Main/>
      <Aboutf/>
      <Enter/>
      <Contactf/>
      </div>
  

    </div>
  )
}

export default App
