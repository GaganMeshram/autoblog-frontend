import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ posts }) => {
    if (posts.length === 0) {
        return <p>No posts available</p>;  // Display a message if no posts
      }
  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-md-4" key={post._id}>
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
