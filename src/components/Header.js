import React, { useState } from 'react';
import '../css/Header.css'; // Custom CSS for Header

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">AI Blogs</a>
      </div>
      
      {/* Hamburger for mobile view */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
      {/* Navigation links */}
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/topics">Topics</a></li>
          <li><a href="/write">Write</a></li>
          <li><a href="/signin">Sign In</a></li>
          <li><a href="/get-started">Get Started</a></li>
        </ul>
      </nav>
      
      {/* User Menu for Medium-like UI */}
      <div className="user-menu">
        <a href="/profile">Profile</a>
        <a href="/logout">Log Out</a>
      </div>
    </header>
  );
}

export default Header;
