import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const navbarStyle = {
    position: 'fixed', // Make the navbar fixed
    top: '0',          // Stick it to the top of the viewport
    width: '100%',     // Make it full-width
    zIndex: '1000',    // Set a high z-index to make sure it's on top of other content
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3" style={navbarStyle}>
      <Link className="navbar-brand" to="/">
        NewsBuzz
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-left" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sports">
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/business">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/education">
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/politics">
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/international">
              International
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

