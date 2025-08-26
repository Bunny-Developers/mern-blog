import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts && posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};


export default BlogList;
