import React from "react";
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function NavBar({ sidebarToggle, setsidebarToggle, setcrossBtn, crossBtn }) {
  return (
    <nav className="bg-gray-800 px-3 py-3 flex justify-between  ">
      <div className="flex items-center text-xl  ">
        <FaBars
          className="text-white me-3 cursor-pointer"
          onClick={() => {
            setsidebarToggle(!sidebarToggle);
            setcrossBtn(!crossBtn);
          }}
        />
        <span className="text-white font-semibold"> SocialMedia</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-64 ">
          <span className="relative md:absolute hidden inset-y-0 left-0 md:flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black ">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
          />
        </div>
        <div>
          <span className=" text-white">
            <FaBell className="w-6 h-6" />
          </span>
        </div>
        <div className="relative">
          <button className="text-white group">
            <span>
              <FaUserCircle className=" w-6 h-6 mt-1" />
            </span>
            <div className="z-10 hidden absolute rounded-lg bg-white shadow w-32 group-focus:block top-full right-0">
              <ul className="py-4 z-auto text-gray-950 text-sm">
                <li>Profile</li>
                <li>Setting</li>
                <li>Log out</li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
