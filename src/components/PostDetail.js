import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { marked } from "marked";
import moment from "moment";
import '../css/PostDetails.css';
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback"; // Import the fallback component

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const url = process.env.REACT_APP_API_URL;
        const response = await axios.get(`${url}/api/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        console.error("Failed to fetch the post:", err);
        setError(err); // Store the error in the state
      }
    };

    if (id) fetchPost();
  }, [id]);

  if (error) throw error; // Throw the error to be caught by ErrorBoundary

  if (!post) return <p>Loading...</p>;

  const formattedDate = moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a");

  return (
    <div className="container mt-4">
      <h1 className="title">{post.title}</h1>
      <div className="meta-info">
        <p>Published by: <strong>{"AI Blogs"}</strong></p>
        <p>Published at: <strong>{formattedDate}</strong></p>
      </div>
      {post.image && <img src={post.image} alt={post.title} className="img-fluid" />}
      <div className="content" dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </div>
  );
};

const PostDetailWithErrorBoundary = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // You can implement custom reset logic here
      window.location.reload(); // Example: Reload the page
    }}
  >
    <PostDetail />
  </ErrorBoundary>
);

export default PostDetailWithErrorBoundary;
