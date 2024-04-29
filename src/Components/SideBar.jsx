import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaPoll } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

function SideBar({ crossBtn, setcrossBtn, Selecttab, setselecttab }) {
  // const [menu, setmenu] = useState("Home");
  return (
    <div
      // className={`${sidebarToggle ? "md:hidden" : "md:block"}
      className={` bg-gray-800 md:fixed  h-full px-3 py-2 absolute left-0 max-[600px]:right-0 top-0 z-50  ${
        crossBtn ? "inline-block" : "hidden md:inline-block"
      }`}
    >
      <div className="py-2 mb-4 flex items-center justify-between">
        <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
        <span className="md:hidden  bg-white text-base">
          <RxCrossCircled onClick={() => setcrossBtn(!crossBtn)} />
        </span>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold ">
        <li
          className={`mb-2 py-2 rounded ${
            Selecttab === "Home" ? "active" : ""
          }`}
        >
          <a href="#" className={`px-3  `} onClick={() => setselecttab("Home")}>
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
            Home
          </a>
        </li>
        <li
          className={`mb-2 rounded  py-2 ${
            Selecttab === "Create post" ? "active" : ""
          }  `}
        >
          <a
            href="#"
            className="px-3"
            onClick={() => setselecttab("Create post")}
          >
            <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2" />
            Create post
          </a>
        </li>
        {/* <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="#" className="px-3">
            <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2" />
            Reports
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="#" className="px-3">
            <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2" />
            Inbox
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="#" className="px-3">
            <IoSettingsOutline className="inline-block w-6 h-6 mr-2 -mt-2" />
            Setting
          </a>
        </li> */}
      </ul>
    </div>
  );
}
export default SideBar;
