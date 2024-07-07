import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Pratik</Link>
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact US</Link>

      </div>
      {/* <div className="navbar-text">
        <Link to="/login">Pratik</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
