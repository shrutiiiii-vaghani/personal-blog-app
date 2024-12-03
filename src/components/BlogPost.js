import React, { useState } from 'react';
import './BlogList.css';    // Make sure to import the CSS file

const BlogPost = ({ post, editPost, deletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editPost(post.id, { ...post, title, content });
    setIsEditing(false);
    // Show alert on successful edit
    alert('Post successfully edited!');
  };

  const handleDelete = () => {
    deletePost(post.id);
    // Show alert on successful delete
    alert('Post successfully deleted!');
  };

  return (
    <div className="blog-post">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit title"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Edit content"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
