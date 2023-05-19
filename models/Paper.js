const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
   reviewers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reviewer',
  }],
});
  // Other paper-related fields



const Paper = mongoose.model('Paper', paperSchema);

module.exports = Paper;

