import React from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';  

const BlogList = ({ posts, editPost, deletePost }) => {
  return (
    <div className="blog-list">
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map(post => (
          <BlogPost 
            key={post.id} 
            post={post} 
            editPost={editPost} 
            deletePost={deletePost} 
          />
        ))
      )}
    </div>
  );
};

export default BlogList;
