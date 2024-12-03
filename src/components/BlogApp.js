import React, { useState, useEffect } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';


const BlogApp = () => {
  // Load posts from localStorage or set an empty array
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  // Save posts to localStorage whenever posts state changes
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (title, content) => {
    const newPost = { id: Date.now(), title, content };
    setPosts([newPost, ...posts]);
  };

  const editPost = (id, updatedPost) => {
    setPosts(posts.map(post => (post.id === id ? updatedPost : post)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <BlogForm addPost={addPost} />
      <BlogList posts={posts} editPost={editPost} deletePost={deletePost} />
    </div>
  );
};

export default BlogApp;
