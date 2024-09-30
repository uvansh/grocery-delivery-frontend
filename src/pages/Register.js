import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });
      setMessage(response.data.message); // Use response.data.message for success
    } catch (error) {
      // Log the full error to see its structure
      console.error(error.response); // Check if the response exists
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || 'Error during registration. Please try again.');
      } else {
        setMessage('Error during registration. Please try again.');
      }
    }
  };


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleSubmit} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
