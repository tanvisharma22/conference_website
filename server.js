// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;


// Allow requests from all origins
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);


// Add more routes for other functionalities


// MongoDB Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/conference-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });
