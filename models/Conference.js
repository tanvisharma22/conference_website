// Conference.js

const mongoose = require('mongoose');

const conferenceSchema = new mongoose.Schema({
  conferenceName: { type: String, required: true },
  theme: { type: String, required: true },
  dateTime: { type: Date, required: true },
  submissionDeadline: { type: Date, required: true },
  chair: {
    name: { type: String, required: true },
    expertise: { type: String, required: true }
  }
});

const Conference = mongoose.model('Conference', conferenceSchema);

module.exports = Conference;
