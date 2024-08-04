import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div >


<nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
      <span className="self-center text-3xl font-semibold whitespace-nowrap text-white dark:text-white">FIRST FRAMWORK</span>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  border-gray-100 text-center rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
                <NavLink
                  to={'/'}
                  className="block py-2 text-lg px-3 text-white  md:bg-transparent transition-all max-md:mb-4  md:p-1 rounded-md dark:text-white  max-md:bg-slate-700  hover:bg-teal-600 focus:bg-teal-600 "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
      <li>
                <NavLink
                  to={'about'}
                  className="block py-2  text-lg px-3 text-white  md:bg-transparent transition-all max-md:mb-4  md:p-1 rounded-md dark:text-white max-md:bg-slate-700  hover:bg-teal-600 focus:bg-teal-600 "
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
      <li>
                <NavLink
                  to={'portfolio'}
                  className="block py-2 text-lg px-3 text-white  md:bg-transparent transition-all max-md:mb-4  md:p-1 rounded-md dark:text-white max-md:bg-slate-700  hover:bg-teal-600 focus:bg-teal-600 "
                  aria-current="page"
                >
                  portfolio
                </NavLink>
              </li>
      <li>
                <NavLink
                  to={'contact'}
                  className="block py-2 text-lg px-3 text-white  md:bg-transparent transition-all max-md:mb-4  md:p-1 rounded-md dark:text-white max-md:bg-slate-700  hover:bg-teal-600 focus:bg-teal-600 "
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>

      </ul>
    </div>
  </div>
</nav>
</div>



  );
}
