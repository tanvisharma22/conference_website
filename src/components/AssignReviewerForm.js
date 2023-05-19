// components/AssignReviewerForm.js
import React, { useState } from 'react';
import axios from 'axios';
import AvailableReviewers from './AvailableReviewers';

const AssignReviewerForm = () => {
  const [paperId, setPaperId] = useState('');
  const [reviewerId, setReviewerId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const assignmentData = {
      paperId,
      reviewerId,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/reviewer/assign', assignmentData);
      console.log(response.data); // Reviewer assigned successfully
      // Clear form fields
      setPaperId('');
      setReviewerId('');
    } catch (error) {
      console.error('Error assigning reviewer:', error);
      // Handle error
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Paper ID" value={paperId} onChange={(e) => setPaperId(e.target.value)} required />
      <input type="text" placeholder="Reviewer ID" value={reviewerId} onChange={(e) => setReviewerId(e.target.value)} required />
      <button type="submit">Assign Reviewer</button>
    </form>

    <AvailableReviewers />
    </>
  );
};

export default AssignReviewerForm;
