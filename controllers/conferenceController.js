// conferenceController.js

const Conference = require('../models/conference');

// Create a new conference
const createConference = async (req, res) => {
  try {
    const { conferenceName, theme, dateTime, submissionDeadline, chairName, chairExpertise } = req.body;
    const conference = await Conference.create({
      conferenceName,
      theme,
      dateTime,
      submissionDeadline,
      chair: {
        name: chairName,
        expertise: chairExpertise
      }
    });
    res.status(201).json(conference);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all conferences
const getAllConferences = async (req, res) => {
  try {
    const conferences = await Conference.find();
    res.status(200).json(conferences);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createConference,
  getAllConferences
};
