import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import axios from "axios";
import { marked } from "marked"; // Import the library
import moment from "moment"; // Import moment.js
import '../css/PostDetails.css';


const PostDetail = () => {
  const { id } = useParams(); // Extract 'id' from the URL parameters
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const url = process.env.REACT_APP_API_URL
        const response = await axios.get(`${url}/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Failed to fetch the post:", error);
      }
    };

    if (id) fetchPost(); // Fetch post only if 'id' exists
  }, [id]); // Dependency array listens to changes in the post ID

  if (!post) return <p>Loading...</p>;

   // Format the date using moment.js (adjust the format as needed)
   const date = post.createdAt
   const formattedDate = moment(date).format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div className="container mt-4">
      <h1 className="title">{post.title}</h1>
      
      {/* Display Published by and Published at */}
      <div className="meta-info">
        <p>Published by: <strong>{'AI Blogs'}</strong></p>
        <p>Published at: <strong>{formattedDate}</strong></p>
      </div>

      {post.image && <img src={post.image} alt={post.title} className="img-fluid" />}
      
      {/* Render HTML content parsed from Markdown */}
      <div className="content" dangerouslySetInnerHTML={{ __html: marked(post.content) }} /> 
    </div>
  );
};

export default PostDetail;
