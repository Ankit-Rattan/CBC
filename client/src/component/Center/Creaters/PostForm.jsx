// PostForm.jsx
import React, { useState } from 'react';

const PostForm = () => {
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handlePostSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          name,
          link,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('New post created:', data);
        alert("POST SUCCESSFUL");
      } else {
        console.error('Error creating post:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className=''>
      <h2>Create a New Post</h2>
      <label>
        Content:
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Link:
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
        <p className='ml-[2vh]'>Type 'NA' if no link is there</p>
      </label>
      <br />
      <button onClick={handlePostSubmit}>Post</button>
    </div>
  );
};

export default PostForm;
