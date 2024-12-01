import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';  // Use Routes and Route instead of Switch
import axios from 'axios';
import BlogList from './components/BlogList';
import Header from './components/Header';
import PostDetail from './components/PostDetail';

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const url = process.env.REACT_APP_API_URL + "/api/posts";
    const res = await axios.get(url);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<BlogList posts={posts} />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
