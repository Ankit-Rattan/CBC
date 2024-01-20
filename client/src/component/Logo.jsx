import React from 'react'
import img from './images/CBC.png'
import { NavLink } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            <div className='p-0 ml-2 '>
                <NavLink to='/' >
                <img src={img} alt='' className='rounded-full w-24 m-0 ' />

                </NavLink>
            </div>
        </div>
    )
}

export default Logo
