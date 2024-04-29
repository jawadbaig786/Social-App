import React, { useContext } from "react";
import NavBar from "./NavBar";
import Createpost from "../Createpost";
import PostList from "../Post-List";
// import { PostList as PostListData } from "../Store/PostListProvider";
// const { alldel } = useContext(PostListData);
function DashBoard({
  sidebarToggle,
  setsidebarToggle,
  setcrossBtn,
  crossBtn,
  Selecttab,
  setselecttab,
}) {
  return (
    <div className="relative">
      <div className={`${sidebarToggle ? "basis-full" : ""}  `}>
        <NavBar
          sidebarToggle={sidebarToggle}
          setsidebarToggle={setsidebarToggle}
          setcrossBtn={setcrossBtn}
          crossBtn={crossBtn}
        />
      </div>
      {/* <div className="absolute right-[60px] mt-5 font-semibold text-white px-2 p-2 rounded-full  bg-red-500  hover:bg-red-800 hover:scale-125 cursor-pointer">
        <a href="#" className="">
          Del
        </a>
      </div> */}
      {Selecttab == "Home" ? <PostList /> : <Createpost />}
    </div>
  );
}
export default DashBoard;
