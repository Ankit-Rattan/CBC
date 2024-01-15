import React from 'react';
import './VideoBackground.css'; 
import Vid from '../../images/bgCode.mp4'
import CodeIntro from './CodeIntro';
const Coder = () => {
    return (
        <div className="video-background">
          <video autoPlay muted loop>
            <source src={Vid} type="video/mp4" />
          </video>
          {/*  For other content*/}
            <div className='content mt-2'>
            <CodeIntro/>
            </div>
        </div>
      );
}

export default Coder
