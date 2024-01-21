import React from "react";
import Footer from "../../Footer";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";

const CodeNav = () => {
  return (
    <>
      <div className="mb-2 p-3 items-center flex justify-between shadow-lg ">
        <Logo />
        <div className="justify-center">
          <ul className=" text-lg flex text-center justify-between">
            <div>
              <li className=" bg-white border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-[.2rem] px-[1rem] cursor-pointer m-[.7rem] text-[1.5rem]">
                <NavLink to="/blog">Bytes</NavLink>
              </li>
            </div>
            <div>
              <li className="bg-white border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-[.2rem] px-[1rem] cursor-pointer m-[.7rem] text-[1.5rem] ">
                <NavLink to="/chatcode">OPEN Chat</NavLink>
              </li>
            </div>
          </ul>
        </div>
        {/* <div></div> */}
      </div>
    </>
  );
};

export default CodeNav;
