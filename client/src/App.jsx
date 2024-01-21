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
import Home from './Home'
import Coder from './component/Center/Coders/Coder'
import Creater from './component/Center/Creaters/Creater'
import Blog from './component/Center/Coders/Blog'
import ChatCode from './component/Center/Coders/ChatCode'
import Contact from './component/Contact'


function App() {

  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  },[])




  return (
    <div>
          {
            loading? <Loader/>:
            <div>

          <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/center' element={<Center/>}> </Route>
            <Route path='/coder' element={<Coder/>}> </Route>
            <Route path='/creater' element={<Creater/>}> </Route>
            <Route path='/blog' element={<Blog/>}> </Route>
            <Route path='/chatcode' element={<ChatCode/>}> </Route>
            <Route path='/about' element={<About/>}> </Route>
            <Route path='/contact' element={<Contact/>}> </Route>
          </Routes>
          <Footer/>
            </div>
          }
          
    </div>
  )
}

export default App
