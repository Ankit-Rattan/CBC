import React from "react";
import { NavLink } from "react-router-dom";
import img from "./images/about.png";

function Enter() {
  return (
    <div className="flex justify-between  bg-white">
      <div className="items-center m-auto">
        <img src={img} className=" h-[60vh] imganim" />
      </div>

      <div className="flex flex-col flex-wrap justify-around h-[70vh] mt-10 mb-10 p-16">
        <div className=" m-auto">
          <p className="text-8xl">So,</p>
          <p className="text-5xl flex flex-wrap gap-2">
            {" "}
            What are you <p className="text-red-500">waiting</p> for?
          </p>
        </div>
        <div className="m-auto">
          <NavLink to="/center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-5xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-800 dark:focus:ring-red-500 ">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Let's Start
              </span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Enter;
