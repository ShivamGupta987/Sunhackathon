// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import specific CSS for the NavBar

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar ${window.pageYOffset > 20 ? 'navbar-scrolling' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">JobApp</Link>
    
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-nav-links active' : 'mobile-nav-links'}`}>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/jobs" onClick={() => setIsMobileMenuOpen(false)}>Jobs</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About us</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
