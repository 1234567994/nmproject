import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import dhiv from '../styles/pages/images/dhiv.jpg';

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img 
              src={dhiv} 
              alt="DentalCare Pro Logo" 
              className="logo-image"
              style={{ height: '50px', marginRight: '10px' }}
            />
            DentalCare Pro
          </Link>
        </div>
        
        <div className="navbar-right">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-button">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-button">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/treatments" className="nav-button">Treatments</Link>
            </li>
            <li className="nav-item">
              <Link to="/facilities" className="nav-button">Facilities</Link>
            </li>
            <li className="nav-item">
              <Link to="/doctors" className="nav-button">Doctors</Link>
            </li>
            <li className="nav-item">
              <Link to="/consultations" className="nav-button">Consultations</Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <button onClick={onLogout} className="nav-button logout-btn">
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-button login-btn">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
