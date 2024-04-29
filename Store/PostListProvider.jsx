import React, { createContext, useEffect, useReducer } from "react";

export const PostList = createContext({
  Postlist: [],
  AddPost: () => {},
  Addinitialpost: () => {},
  deletepost: () => {},
});

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Kashmir",
//     body: "hi Friends, iam going to going to kashmir its very beautiful place and peaceful i can enjoy and seen the beautiful places like jannat  ",
//     reaction: 49,
//     tags: ["vaction", "kashmir", "beautiful", "jannat"],
//     userId: "user-9",
//   },
//   {
//     id: "2",
//     title: "pass hughe bhai",
//     body: "4 saal ki masti ky baad hughe hain pass  ",
//     reaction: 3,
//     tags: ["masti", "unbeleveable", "graduating"],
//     userId: "user-12",
//   },
// ];

const PostListReducer = (currPostList, action) => {
  let newPostlist;
  switch (action.type) {
    case "Delete_post":
      newPostlist = currPostList.filter((post) => post.id !== action.payload);
      localStorage.setItem("data", JSON.stringify(newPostlist));

      break;
    case "Add_post":
      newPostlist = [action.payload, ...currPostList];
      localStorage.setItem("data", JSON.stringify(newPostlist));

      break;
    case "Show_data":
      newPostlist = action.payload;

      break;
    case "Addinitialpost":
      newPostlist = action.payload.posts;

      break;
    default:
      newPostlist = currPostList;
  }
  return newPostlist;
};

export const PostListProvider = ({ children }) => {
  const [Postlist, dispatchPostList] = useReducer(PostListReducer, []);

  const Addpost = (userId, posttitle, postbody, postreaction, posttags) => {
    dispatchPostList({
      type: "Add_post",
      payload: {
        id: Date.now(),
        title: posttitle,
        body: postbody,
        reaction: postreaction,
        tags: posttags,
        userId: userId,
      },
    });
  };
  const Addinitialpost = (posts) => {
    dispatchPostList({
      type: "Addinitialpost",
      payload: {
        posts,
      },
    });
  };

  const deletepost = (postid) => {
    dispatchPostList({
      type: "Delete_post",
      payload: postid,
    });
  };

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("data"));
  //   if (storedData == "") {
  //     localStorage.setItem("data", JSON.stringify(DEFAULT_POST_LIST));
  //     dispatchPostList({ type: "Show_data", payload: DEFAULT_POST_LIST });
  //   } else {
  //     dispatchPostList({ type: "Show_data", payload: storedData });
  //   }
  // }, []);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData === null) {
      // Set default value if localStorage is empty or returns null
      localStorage.setItem("data", JSON.stringify([]));
      dispatchPostList({ type: "Show_data", payload: [] });
    } else {
      dispatchPostList({ type: "Show_data", payload: storedData });
    }
  }, []);
  return (
    <PostList.Provider
      value={{ Postlist, Addpost, Addinitialpost, deletepost }}
    >
      {children}
    </PostList.Provider>
  );
};
