// PostForm.jsx
import React, { useState } from "react";

const PostForm = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handlePostSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          name,
          link,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("New post created:", data);
        alert("POST SUCCESSFUL");
      } else {
        console.error("Error creating post:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <div className="form-container sign-in-container">
        <h1>Create a New Post</h1>

        <div className="infield">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="infield">
          <label>
            Link:
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <p className="ml-[2vh]">Type '-' if no link is there</p>
          </label>
        </div>
        <div className="infield">
          <label className="text-center items-center">
            Content:
            <textarea
              type="text"
              cols="130"
              color="black"
              value={content}
              style={{ color: "black" }} 
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
        </div>
        <br />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
    </>
  );
};

export default PostForm;
