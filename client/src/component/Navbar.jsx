import React from 'react'

import Center from './Center/Center'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Logo from './Logo'


function Navbar(props) {

  return (
    <>

      <div className='flex justify-around bg-slate-300 mt-4 p-5 shadow-lg items-center p-px'>
        <Logo/>
        <div className='ml-auto pr-10 '>
            <ul className='flex gap-12 text-lg '>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'><NavLink to='/'>Home</NavLink></li>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'><NavLink to='/center'>CBC Center</NavLink></li>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'><NavLink to='/about'>About Us</NavLink> </li>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'><NavLink to= '/contact'> Contact Us</NavLink></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
