import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/authForms.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    navigate('/login');
  };

  return React.createElement(
    'div',
    { className: 'auth-form-container' },
    [
      React.createElement('h2', { key: 'title' }, 'Create Account'),
      error && React.createElement('div', { className: 'error-message', key: 'error' }, error),
      React.createElement(
        'form',
        { onSubmit: handleSubmit, className: 'auth-form', key: 'form' },
        [
          createFormGroup('Full Name', 'text', 'name', formData.name, handleChange, true),
          createFormGroup('Email', 'email', 'email', formData.email, handleChange, true),
          createFormGroup('Password', 'password', 'password', formData.password, handleChange, true, { minLength: '6' }),
          createFormGroup('Confirm Password', 'password', 'confirmPassword', formData.confirmPassword, handleChange, true),
          React.createElement('button', { type: 'submit', className: 'submit-button', key: 'submit' }, 'Sign Up')
        ]
      ),
      React.createElement(
        'div',
        { className: 'auth-links', key: 'links' },
        React.createElement('p', null, 'Already have an account? ', React.createElement('a', { href: '/login' }, 'Login'))
      )
    ]
  );
}

function createFormGroup(label, type, name, value, onChange, required, extraProps = {}) {
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
}

export default SignupForm;