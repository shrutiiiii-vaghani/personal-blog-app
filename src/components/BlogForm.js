import React, { useState } from 'react';
import './BlogForm.css'; // Import the CSS file

const BlogForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addPost(title, content);
      setTitle('');
      setContent('');
      alert('Post successfully Created!');
    }
  };

  return (
    <div className="blog-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br />
        <textarea
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ height: "150px" }}
        /><br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default BlogForm;
