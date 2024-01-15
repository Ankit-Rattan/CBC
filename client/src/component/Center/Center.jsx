import React from 'react'
import Navbar from '../Navbar'
import Button from './Button'
import { NavLink } from 'react-router-dom'
const Center = () => {
  return (
    <div>
        
    <div>
        <Navbar/>
        <div className='justify-center mt-[5rem] h-[100vh] text-center w-fit m-auto '>
        <div>
        <NavLink to='/creater'><Button  title="Create by Creators"/></NavLink>
        </div>
        <div className='mt-[5rem]'>
        <NavLink to='/coder'><Button title="Create by Coders"/></NavLink>
        </div>
        </div>
    </div>

    </div>
  )
}

export default Center
