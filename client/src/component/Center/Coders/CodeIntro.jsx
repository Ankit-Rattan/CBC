import React from 'react';
import Footer from '../../Footer';
import { NavLink } from 'react-router-dom';


const CodeIntro= () => {
  return (
    <>
      <div className=' bg-slate-300 p-5 shadow-lg items-center m-auto rounded-full shadow-zinc-50'>
        <div className='justify-center'>
          <ul className=' text-lg text-center justify-around'>
            <div>

              <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-[2rem] px-[3rem] cursor-pointer m-[4rem] text-[3rem]'><NavLink to='/blog'>Bytes</NavLink></li>
            </div>
            <div>

              <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-[1rem] px-[2rem] cursor-pointer m-[4rem] text-[3rem] '><NavLink to='/chatcode'>OPEN Chat</NavLink></li>
            </div>
          </ul>
        </div>
      </div>

    </>
  );
};

export default CodeIntro;
