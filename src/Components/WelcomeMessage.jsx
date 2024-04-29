import React from "react";

function WelcomeMessage({ onGetpostclick }) {
  return (
    <>
      <center>
        <h1 className="font-bold text-2xl my-4">There are no post</h1>
        <a
          href="#"
          className="p-1 px-5 rounded  bg-blue-700 hover:bg-blue-800 font-semibold text-white "
          onClick={onGetpostclick}
        >
          Fetch from server
        </a>
      </center>
    </>
  );
}
export default WelcomeMessage;
