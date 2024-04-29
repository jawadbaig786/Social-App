import React, { useState } from "react";
// import { FaFacebookSquare } from "react-icons/fa";
import SideBar from "./Components/SideBar";
import DashBoard from "./Components/DashBoard";
// import Createpost from "./Createpost";
// import PostList from "./Post-List";
import { PostListProvider } from "../Store/PostListProvider";

function App() {
  const [sidebarToggle, setsidebarToggle] = useState(false);
  const [crossBtn, setcrossBtn] = useState(false);
  const [Selecttab, setselecttab] = useState("Home");
  return (
    <PostListProvider>
      <div className="flex ">
        <div className={`${sidebarToggle ? "md:hidden" : "md:basis-2/12"}`}>
          <SideBar
            sidebarToggle={sidebarToggle}
            crossBtn={crossBtn}
            setcrossBtn={setcrossBtn}
            Selecttab={Selecttab}
            setselecttab={setselecttab}
          />
        </div>
        <div
          className={`basis-full ${sidebarToggle ? "" : "md:basis-10/12"}  `}
        >
          <DashBoard
            sidebarToggle={sidebarToggle}
            setsidebarToggle={setsidebarToggle}
            setcrossBtn={setcrossBtn}
            crossBtn={crossBtn}
            Selecttab={Selecttab}
            setselecttab={setselecttab}
          />
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
