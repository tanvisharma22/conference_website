// controllers/ReviewerController.js
const Paper = require('../models/paper');
const Reviewer = require('../models/Reviewer');

// Controller function for assigning reviewers to a paper

exports.createReviewer = async (req, res) => {
    const { name, email, expertise } = req.body;
  try {
   
    const reviewer = new Reviewer({ name, email, expertise });
    await reviewer.save();
    res.status(201).json({ message: 'Reviewer registered successfully' });
  } catch (error) {
    console.error('Error registering reviewer:', error);
    res.status(500).json({ message: 'Failed to register reviewer' });
  }
};

exports.assignReviewer = async (req, res) => {
  const { paperId, reviewerId } = req.body;

  try {
    // Check if the paper and reviewer exist
    const paper = await Paper.findById(paperId);
    const reviewer = await Reviewer.findById(reviewerId);

    if (!paper || !reviewer) {
      return res.status(404).json({ error: 'Paper or reviewer not found' });
    }

    // Assign the reviewer to the paper
    paper.reviewers.push(reviewerId);
    await paper.save();

    res.json({ message: 'Reviewer assigned successfully' });
  } catch (error) {
    console.error('Error assigning reviewer:', error);
    res.status(500).json({ error: 'An error occurred while assigning reviewer' });
  }
};

const fetchAvailableReviewers = async (req, res) => {
  try {
    // Fetch reviewers based on criteria (e.g., expertise, availability)
    const reviewers = await Reviewer.find({ expertise: 'Some expertise', availability: true });
    res.status(200).json(reviewers);
  } catch (error) {
    console.error('Error fetching available reviewers:', error);
    res.status(500).json({ message: 'Failed to fetch available reviewers' });
  }
};

module.exports = {
  fetchAvailableReviewers,
};
