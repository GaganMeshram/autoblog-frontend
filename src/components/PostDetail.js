import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostDetail = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${match.params.id}`);
      setPost(res.data);
    };

    fetchPost();  // Call fetchPost function inside the useEffect

  }, [match.params.id]);  // Dependency array listens to changes in the post ID

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} className="img-fluid" />
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
