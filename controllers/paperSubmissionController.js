const Paper = require('../models/paper');

// Get all papers
exports.getPapers = async (req, res) => {
  try {
    const papers = await Paper.find();
    res.json(papers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new paper
exports.createPaper = async (req, res) => {
  try {
    const { title, authors, abstract } = req.body;

    const paper = new Paper({
      title,
      authors,
      abstract,
    });

    const savedPaper = await paper.save();
    res.status(201).json(savedPaper);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
