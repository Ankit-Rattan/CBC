import React from 'react'

const Contact = () => {
  return (
    <div className='h-[100vh] bg-black' id='contact'> 
      <div>
        <h1 className='text-center text-[3rem] font-mono font-semibold m-[2rem] text-white'>Connect with us  </h1>
      </div>
      <div className=' flex flex-wrap text-center text-[2rem] justify-evenly mt-[20vh]'>
        <div className='bg-black text-red-400 shadow-2xl border border-red-400 shadow-red-400 p-[1rem] rounded-full cursor-pointer font-mono imganim '>📧 Email</div>
        <div className='bg-black text-slate-300 p-[1rem] border border-slate-300 shadow-2xl shadow-slate-300 rounded-full cursor-pointer font-mono buttonmove'>📞 Number</div>
        <div className='bg-black text-blue-400 p-[1rem] border border-blue-400 shadow-2xl shadow-blue-400 rounded-full cursor-pointer font-mono imganim'>📘 Linkedin</div>
        <div className='bg-black text-amber-200 shadow-2xl border border-amber-200 shadow-amber-200 p-[1rem] rounded-full cursor-pointer font-mono buttonmove'>✖️/Twitter </div>
      </div>
    </div>
  )
}

export default Contact
