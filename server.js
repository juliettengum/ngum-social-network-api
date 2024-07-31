// server.js
const express = require('express');
const connectDb = require('./config/connection');
const routes = require('./routes'); // Ensure this path is correct
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in routes/index.js with the /api prefix
app.use('/api', routes);

// Connect to the database
connectDb();

// Start the server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
