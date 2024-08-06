// server.js
// const express = require('express');
// const connectDb = require('./config/connection');
// const routes = require('./routes'); // Ensure this path is correct
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware to parse JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Use the routes defined in routes/index.js with the /api prefix
// app.use('/api', routes);

// // Connect to the database
// connectDb();

// // Start the server
// app.listen(PORT, () => {
//   console.log(`API server running on port ${PORT}!`);
// });




const express = require('express');
const connectDb = require('./config/connection');
const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtRoutes'); // Import thought routes
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in routes/api/userRoutes.js
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes); // Register thought routes

connectDb();

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});

