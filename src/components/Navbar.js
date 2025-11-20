import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">Mangalore Tourism.</div>
      <div className="navbar-links">
        {/* Show Register button only on Home page */}
        {location.pathname === "/" && (
          <Link to="/register">Register</Link>
        )}

      </div>
      <div className="navbar-links">
        {/* Show Register button only on Home page */}
        {location.pathname === "/" && (
          <Link to="/admin-dashboard"></Link>
        )}

      </div>
    </nav>
  );
}

export default Navbar;


