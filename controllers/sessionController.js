const Session = require('../models/session');

// Get all sessions
exports.getSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new session
exports.createSession = async (req, res) => {
  try {
    const { title, description } = req.body;

    const session = new Session({
      title,
      description,
    });

    const savedSession = await session.save();
    res.status(201).json(savedSession);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
