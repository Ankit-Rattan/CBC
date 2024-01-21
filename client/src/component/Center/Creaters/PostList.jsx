// PostList.jsx
import React, { useState, useEffect } from "react";
import StrSection from "./StrSection";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts");
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error("Error fetching posts:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="post_list_outer flex  ">
      <div className="post_list justify-center">
        <div className="h2 text-center">
          <h2>All Posts</h2>
        </div>
        <div className="post_list_inner items-center ">
          {posts.map((post) => (
            <StrSection
              key={post._id}
              title={post.content}
              name={post.name}
              date={new Date(post.date).toISOString().split("T")[0]}
              primarytext={post.content}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
