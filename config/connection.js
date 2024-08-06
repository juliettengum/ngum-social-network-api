// // config/connection.js
// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables from .env file

// function connectDb() {
//   const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/SocialDB';
//   mongoose.connect(dbURI)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(error => console.error('MongoDB connection error:', error));
// }

// module.exports = connectDb;

const mongoose = require('mongoose');
require('dotenv').config();

function connectDb() {
  const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB'; // Ensure this matches the existing database name
  mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));
}

module.exports = connectDb;
