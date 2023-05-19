// components/PaperSubmissionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PaperSubmissionForm = () => {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  // ...other paper fields...

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paperData = {
      title,
      authors: authors.split(',').map((author) => author.trim()),
      // ...other paper fields...
    };

    try {
      const response = await axios.post('http://localhost:8000/api/papers', paperData);
      console.log(response.data);
      // Clear form fields
      setTitle('');
      setAuthors('');
      // ...clear other form fields...
    } catch (error) {
      console.error('Error submitting paper:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Authors (comma-separated)" value={authors} onChange={(e) => setAuthors(e.target.value)} required />
      {/* ...other form fields... */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaperSubmissionForm;
