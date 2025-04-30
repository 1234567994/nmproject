import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/authForms.css';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Simulate successful login
    onLogin();
    navigate('/');
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
      <div className="auth-links">
        <a href="/forgot-password">Forgot Password?</a>
        <span> | </span>
        <a href="/signup">Create Account</a>
      </div>
    </div>
  );
}

export default LoginForm;