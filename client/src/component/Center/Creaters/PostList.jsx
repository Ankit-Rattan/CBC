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
    <div className="post_list_outer">
      <div className="post_list">
        <div className="h2">
          <h2>All Posts</h2>
        </div>
        <div className="post_list_inner">
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
