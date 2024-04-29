import React, { useContext, useRef } from "react";
import { PostList as PostListData } from "../Store/PostListProvider";
function Createpost() {
  const { Addpost } = useContext(PostListData);
  const useridElement = useRef();
  const posttitleElement = useRef();
  const postbodyElement = useRef();
  const postreactionElement = useRef();
  const posttagsElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = useridElement.current.value;
    const posttitle = posttitleElement.current.value;
    const postbody = postbodyElement.current.value;
    const postreaction = postreactionElement.current.value;
    const posttags = posttagsElement.current.value.split(" ");
    Addpost(userId, posttitle, postbody, postreaction, posttags);
  };
  return (
    <div className=" border border-black px-4 md:w-[50%] md:m-auto md:my-4">
      <form action="#" className="p-4  font-serif" onSubmit={handleSubmit}>
        <div className="flex flex-col  ">
          <label htmlFor="userid" className="font-bold">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="outline-none border border-black  rounded p-1 my-1"
            id="userid"
            ref={useridElement}
            placeholder="Your User id"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="title" className="font-bold">
            Post Title
          </label>
          <input
            type="text"
            className="outline-none border border-black  rounded my-1 p-1"
            id="title"
            ref={posttitleElement}
            placeholder="How are feeling today ..."
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="body" className="font-bold">
            Post Content
          </label>
          <textarea
            rows={5}
            type="text"
            className="outline-none border border-black  rounded  my-1 p-1"
            id="body"
            ref={postbodyElement}
            placeholder="Tell us about it"
          />
        </div>

        <div className="flex flex-col  ">
          <label htmlFor="reaction" className="font-bold">
            Number of reactions
          </label>
          <input
            type="text"
            className="outline-none border border-black  rounded p-1 my-1"
            id="reaction"
            ref={postreactionElement}
            placeholder="How many people react to this post "
          />
        </div>
        <div className="flex flex-col  font-sans">
          <label htmlFor="tags" className="font-bold">
            Enter your hashtags here
          </label>
          <input
            type="text"
            className="outline-none border border-black  rounded p-1 my-1"
            id="userid"
            ref={posttagsElement}
            placeholder="Please enter the tags using space"
          />
        </div>

        <button className=" font-semibold p-1 px-3 rounded mt-2 bg-blue-600 text-white">
          post
        </button>
      </form>
    </div>
  );
}

export default Createpost;
