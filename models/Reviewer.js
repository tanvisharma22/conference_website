// models/Reviewer.js
const mongoose = require('mongoose');

const reviewerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Reviewer', reviewerSchema);


