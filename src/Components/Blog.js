// Blog.js
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        <li>
          <Link to="/blog/post1">Post 1</Link>
        </li>
        <li>
          <Link to="/blog/post2">Post 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
