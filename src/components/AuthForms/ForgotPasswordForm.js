import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/authForms.css';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    setMessage('Password reset link has been sent to your email');
    setTimeout(() => navigate('/login'), 3000);
  };

  // Define the createFormGroup helper function
  const createFormGroup = (label, type, name, value, onChange, required, extraProps = {}) => {
    return React.createElement(
      'div',
      { className: 'form-group', key: name },
      [
        React.createElement('label', { key: 'label' }, label),
        React.createElement('input', {
          type: type,
          name: name,
          value: value,
          onChange: onChange,
          required: required,
          ...extraProps,
          key: 'input'
        })
      ]
    );
  };

  return React.createElement(
    'div',
    { className: 'auth-form-container' },
    [
      React.createElement('h2', { key: 'title' }, 'Forgot Password'),
      error && React.createElement('div', { className: 'error-message', key: 'error' }, error),
      message && React.createElement('div', { className: 'success-message', key: 'message' }, message),
      React.createElement(
        'form',
        { onSubmit: handleSubmit, className: 'auth-form', key: 'form' },
        [
          createFormGroup('Email Address', 'email', 'email', email, (e) => setEmail(e.target.value), true),
          React.createElement('button', { type: 'submit', className: 'submit-button', key: 'submit' }, 'Reset Password')
        ]
      ),
      React.createElement(
        'div',
        { className: 'auth-links', key: 'links' },
        React.createElement('a', { href: '/login' }, 'Back to Login')
      )
    ]
  );
}

export default ForgotPasswordForm;