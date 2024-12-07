import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import axios from "axios";
import { marked } from "marked"; // Import the library

const PostDetail = () => {
  const { id } = useParams(); // Extract 'id' from the URL parameters
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Failed to fetch the post:", error);
      }
    };

    if (id) fetchPost(); // Fetch post only if 'id' exists
  }, [id]); // Dependency array listens to changes in the post ID

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{post.title}</h1>
      {post.image && <img src={post.image} alt={post.title} className="img-fluid" />}
       {/* Render HTML content parsed from Markdown */}
       <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </div>
  );
};

export default PostDetail;
