// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams(); // Use useParams to get the dynamic postId

  return (
    <div>
      <h1>Blog Post: {postId}</h1>
      <p>This is the content for blog post {postId}.</p>
    </div>
  );
};

export default BlogPost;
