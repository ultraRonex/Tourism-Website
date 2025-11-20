import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      const { token, user } = response.data;
  
      toast.success(`Welcome back, ${user.name}!`);
  
      // Store token in localStorage
      localStorage.setItem('token', token);
  
      // Redirect based on role
      setTimeout(() => {
        if (user.role === 'visitor') {
          navigate('/visitor');
        } else if (user.role === 'guide') {
          navigate('/guide');
        } else if (user.role === 'blogger') {
          navigate('/blogger');
        } else {
          navigate('/dashboard'); // fallback
        }
      }, 2000);
    } catch (error) {
      console.error('Login error:', error);
      const errorMsg = error.response?.data?.error || 'Login failed!';
      toast.error(errorMsg);
    }
  };
  

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
