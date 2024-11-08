import React from "react";
import logo from "@/assets/icons/navbarLogo.png";
import lang from "@/assets/icons/lang.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-bg_main border-gray-200 border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  py-3">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse  focus:outline-none"
        >
          <Image src={logo} className="h-4 w-4" alt="Service Hotspot Logo" />
          <span className="self-center text-lg font-semibold whitespace-nowrap text-text_black">
            Service Hotspot
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  ">
            <li>
              <button
                type="button"
                className="text-text_black bg-bg_btn h-10 w-20 focus:outline-none hover:bg-gray-300  font-bold text-md rounded-xl  text-sm px-5 py-2.5 me-2 mb-2 "
              >
                Help
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-gray-900 bg-bg_btn h-10 w-15 focus:outline-none font-bold text-md rounded-xl  text-sm px-5 py-2.5 me-2 mb-2 hover:bg-gray-300 "
              >
                <Image src={lang} className="w-4 h-4" alt="lang" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
