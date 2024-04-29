import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../Store/PostListProvider";

export default function Post({ post }) {
  // console.log(post);
  const { title, body, tags } = post;
  // console.log(post);
  const { deletepost } = useContext(PostListData);
  return (
    <>
      <figure className=" bg-gray-200 rounded-xl p-6 w-[40rem] mx-auto shadow-lg  my-4 ">
        <div className="  space-y-4 relative">
          <blockquote>
            <div>
              <h1 className="font-bold text-xl">
                {title}
                <span
                  className="absolute py-2 text-center  bottom-[107%] right-0  cursor-pointer translate-x-full bg-red-600 rounded-lg px-3 text-white font-medium"
                  onClick={() => deletepost(post.id)}
                >
                  <MdDelete />
                </span>
              </h1>
            </div>
            <div className="my-3">
              <p>{body}</p>
            </div>

            {tags.map((tag, index) => (
              <span
                className="inline-flex items-center rounded-md bg-blue-600 px-2 py-1  text-xs font-bold text-white ring-1 ring-inset ring-gray-500/10 mr-2"
                key={tag}
              >
                {tag}
              </span>
            ))}

            <div className="  font-semibold text-blue-900 p-2 bg-sky-200 shadow-lg mt-4 rounded-xl">
              The post has been reacted by {post.reaction} people
            </div>
          </blockquote>
        </div>
      </figure>
    </>
  );
}
