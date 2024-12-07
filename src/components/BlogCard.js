import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="card mb-4">
      <img src={'https://via.placeholder.com/800x400'} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <Link to={`/post/${post._id}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
