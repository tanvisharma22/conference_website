import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AvailableReviewers = () => {
  const [reviewers, setReviewers] = useState([]);

  useEffect(() => {
    fetchAvailableReviewers();
  }, []);

  const fetchAvailableReviewers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/available');
      setReviewers(response.data);
    } catch (error) {
      console.error('Error fetching available reviewers:', error);
    }
  };

  return (
    <div>
      <h2>Available Reviewers</h2>
      <ul>
        {reviewers.length > 0 ? (
          reviewers.map((reviewer) => (
            <li key={reviewer._id}>{reviewer.name}</li>
          ))
        ) : (
          <li>No available reviewers found.</li>
        )}
      </ul>
    </div>
  );
};
   

export default AvailableReviewers;



