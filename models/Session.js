const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
    papers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Paper' }],
  // ...other session fields...
});


const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;

