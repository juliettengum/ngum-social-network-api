const router = require('express').Router();
const userRoutes = require('./userRoutes'); // Ensure the path matches your actual file structure
const thoughtRoutes = require('./thoughtRoutes'); // Ensure the path matches your actual file structure

// Use userRoutes for any routes that start with '/users'
router.use('/users', userRoutes);

// Use thoughtRoutes for any routes that start with '/thoughts'
router.use('/thoughts', thoughtRoutes);

module.exports = router;
