// src/Header.js
import React from 'react';
import '../css/Header.css'; // Custom CSS for Header

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">AI Blogs</a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/topics">Topics</a></li>
          <li><a href="/write">Write</a></li>
          <li><a href="/signin">Sign In</a></li>
          <li><a href="/get-started">Get Started</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
