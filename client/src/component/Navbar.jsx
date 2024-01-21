import React from "react";
import Logo from "./images/CBC.png";
import Center from "./Center/Center";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="flex justify-around mt-4 p-5 items-center p-px">
        <div className="p-0 ml-2 ">
          <img src={Logo} alt="" className="rounded-full w-24 m-0 " />
        </div>
        <div className="ml-auto pr-10 ">
          <ul className="flex gap-12 text-lg ">
            <li className="border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer">
              <NavLink to="/center">CBC Center</NavLink>
            </li>
            <li className="border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer">
              <a href="#about">About Us</a>{" "}
            </li>
            <li className="border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer">
              <NavLink to="/contact"> Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
