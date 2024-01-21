import React from "react";
import Logo from "./Logo";

const Contact = () => {
  return (
    <div className="h-[110vh] bg-black" id="contact">
      <div>
        <div className="flex justify-between text-center items-center">
          <Logo />
          <div>
            <h1 className="text-center text-[3rem] items-center font-mono font-semibold m-[1rem] text-white">
              Connect with us
            </h1>
          </div>
          <div></div>
        </div>
      </div>
      <div className=" flex flex-wrap text-center text-[2rem] justify-evenly mt-[10vh]">
        <div className="bg-black text-blue-400 p-[1rem] border border-blue-400 shadow-2xl shadow-blue-400 rounded-full cursor-pointer font-mono imganim">
          📘 Linkedin
        </div>
        <div className=" text-red-400 shadow-2xl border border-red-400 shadow-red-400 p-[1rem] rounded-full cursor-pointer font-mono imganim ">
          😺 Github
        </div>
        <div className="bg-black text-amber-200 shadow-2xl border border-amber-200 shadow-amber-200 p-[1rem] rounded-full cursor-pointer font-mono buttonmove">
          ✖️/Twitter{" "}
        </div>
        <div className="bg-black text-slate-300 p-[1rem] border border-slate-300 shadow-2xl shadow-slate-300 rounded-full cursor-pointer font-mono buttonmove">
          ➿ Meta
        </div>
      </div>
      <div className="bg-white max-w-fit p-[1rem] px-[10rem] m-auto my-[2rem] items-center justify-center rounded-md ">

        <p className="text-center mb-3 text-2xl font-bold ">For any query🧐</p>
        <form class="max-w-sm mx-auto">
          <div class="mb-5">
            <label for="message" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Message</label>
            <input type="text"  class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email </label>
            <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Number</label>
            <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="text-right mt-2">

          <button className="bg-black text-white px-[.5rem]  rounded-lg"> Send</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Contact;
