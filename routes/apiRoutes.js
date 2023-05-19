const express = require('express');
const router = express.Router();
const reviewerController = require('../controllers/reviewerController');
const paperSubmissionController = require('../controllers/paperSubmissionController');

const ConferenceController = require('../controllers/conferenceController');
const ReviewerController = require('../controllers/reviewerController');
const conferenceController = require('../controllers/conferenceController');

// Create a new conference
router.post('/conference', conferenceController.createConference);

// Get all conferences
router.get('/conference', conferenceController.getAllConferences);









module.exports = router;
