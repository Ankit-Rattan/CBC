import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Button from './Button';
import bg from '../images/centerbg2.png'
import { NavLink } from 'react-router-dom';

const Center = () => {
  const [show1, setShowButton1] = useState(false);
  const [show2, setShowButton2] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton1(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton2(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <div className='flex flex-wrap justify-around h-[100vh] items-center m-5' >
        <div className='justify-center text-center w-fit m-auto center-container'>
          <div className={`button-container ${show1 ? 'fade-in' : ''}`}>
            <NavLink to='/creater'>
              <Button title="Create by Creators" />
            </NavLink>
          </div>
          <div className={`button-container ${show2 ? 'fade-in' : ''} mt-[5rem]`}>
            <NavLink to='/coder'>
              <Button title="Create by Coders" />
            </NavLink>
          </div>
        </div>
        <div className=' m-5'>
          <img src={bg} alt="background" className=' rounded-full'/>
        </div>

        <div>
        

        </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
