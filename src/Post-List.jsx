// import React, { useContext } from "react";
// import Post from "./Post";
// import { PostList as PostListData } from "../Store/PostListProvider";
// import WelcomeMessage from "./Components/WelcomeMessage";

// function PostList() {
//   const { Postlist, Addinitialpost } = useContext(PostListData);

//   const handlePostclick = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/posts");
//       if (!response.ok) {
//         throw new Error("Failed to fetch posts");
//       }
//       const data = await response.json();
//       Addinitialpost(data.posts);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4 mt-10 ">
//       {(!Postlist || Postlist.length === 0) && (
//         <WelcomeMessage onGetpostclick={handlePostclick} />
//       )}
//       {Postlist &&
//         Postlist.map((post, index) => <Post post={post} key={index} />)}
//     </div>
//   );
// }

// export default PostList;
// User;
// import React, { useContext } from "react";
// import Post from "./Post";
// import { PostList as PostListData } from "../Store/PostListProvider";
// import WelcomeMessage from "./Components/WelcomeMessage";

// function PostList() {
//   const { Postlist, Addinitialpost } = useContext(PostListData);
//   const handlePostclick = () => {
//     fetch("https://dummyjson.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         Addinitialpost(data.Posts);
//       });
//   };
//   return (
//     <div className="flex flex-col gap-4 mt-10 ">
//       {Postlist.length === 0 && (
//         <WelcomeMessage onGetpostclick={handlePostclick} />
//       )}
//       {Postlist.map((post, index) => (
//         <Post post={post} key={index} />
//       ))}
//     </div>
//   );
// }

// export default PostList;
import React, { useContext, useState, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/PostListProvider";
import WelcomeMessage from "./Components/WelcomeMessage";
import LoadingSpiner from "./Components/LoadingSpiner";
function PostList() {
  const { Postlist, Addinitialpost } = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        Addinitialpost(data.posts);
        setDataFetched(true); // Set dataFetched to true after data is fetched
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    if (!dataFetched) {
      fetchData();
    }
  }, [dataFetched, Addinitialpost]); // Add dataFetched as a dependency

  return (
    <div className="flex flex-col gap-4 mt-10 ">
      {dataFetched ? (
        !Postlist || Postlist.length === 0 ? (
          <WelcomeMessage onGetpostclick={() => setDataFetched(false)} />
        ) : (
          Postlist.map((post, index) => <Post post={post} key={index} />)
        )
      ) : (
        <LoadingSpiner />
      )}
    </div>
  );
}

export default PostList;
