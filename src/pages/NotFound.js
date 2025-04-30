import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/notFound.css'; // Create this CSS file

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Oops! Page Not Found</h2>
        <p className="not-found-text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-button">
            Return Home
          </Link>
          <Link to="/contact" className="not-found-button secondary">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;