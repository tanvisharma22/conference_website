import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConferenceForm = () => {
  const [conferenceData, setConferenceData] = useState({
    conferenceName: '',
    theme: '',
    dateTime: '',
    submissionDeadline: '',
    chairName: '',
    chairExpertise: ''
  });

  const handleChange = (e) => {
    setConferenceData({ ...conferenceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/conference', conferenceData);
      // Display success message or redirect to homepage
      console.log('Conference created successfully');
    } catch (error) {
      // Display error message
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Conference</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Conference Name:
          <input type="text" name="conferenceName" value={conferenceData.conferenceName} onChange={handleChange} />
        </label>
        <label>
          Theme:
          <input type="text" name="theme" value={conferenceData.theme} onChange={handleChange} />
        </label>
        <label>
          Date & Time:
          <input type="datetime-local" name="dateTime" value={conferenceData.dateTime} onChange={handleChange} />
        </label>
        <label>
          Submission Deadline:
          <input type="datetime-local" name="submissionDeadline" value={conferenceData.submissionDeadline} onChange={handleChange} />
        </label>
        <label>
          Chair's Name:
          <input type="text" name="chairName" value={conferenceData.chairName} onChange={handleChange} />
        </label>
        <label>
          Chair's Expertise:
          <input type="text" name="chairExpertise" value={conferenceData.chairExpertise} onChange={handleChange} />
        </label>
        <button type="submit">Create Conference</button>
      </form>
    </div>
  );
};



 



export default ConferenceForm;
