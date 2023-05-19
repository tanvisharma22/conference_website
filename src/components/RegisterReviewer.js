import React, { useState } from 'react';
import axios from 'axios';

const RegisterReviewer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [expertise, setExpertise] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/reviewers', {
        name,
        email,
        expertise,
      });
      console.log(response.data.message);
      // Reset form fields
      setName('');
      setEmail('');
      setExpertise('');
    } catch (error) {
      console.error('Error registering reviewer:', error);
    }
  };

  return (
    <div>
      <h2>Register Reviewer</h2>
      <form onSubmit={handleRegister}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Expertise:</label>
        <input
          type="text"
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterReviewer;
