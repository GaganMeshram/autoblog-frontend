import React, { useEffect, useState } from "react";
import axios from "axios";

const PostDetail = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const url = process.env.REACT_APP_API_URL + "/api/posts";
      const res = await axios.get(url+`/${match.params.id}`);
    //   console.log(res)
      setPost(res.data);
    };

    fetchPost(); // Call fetchPost function inside the useEffect
  }, [match.params.id]); // Dependency array listens to changes in the post ID

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
