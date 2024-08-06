// const router = require('express').Router();
// const { mongo, default: mongoose } = require('mongoose');
// const User = require('../../models/User'); // Corrected the model path and name

// // Get all users route
// router.get('/api/users', (req, res) => {
//     User.find({})
//         .then(users => res.json(users))
//         .catch(err => res.status(500).json(err)); // Added status code
// });

// // Get one user by id route and populate thought and friend data
// router.get('/api/users/:id', async (req, res) => {
//     await User.findById({ _id: req.params.id })
//         .populate('thoughts')
//         .populate('friends')
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with that ID' })) // Added 404 handling
//         .catch(err => res.status(500).json(err)); // Added status code
// });

// // Post a new user route
// router.post('/api/users', (req, res) => {
//     User.create(req.body)
//         .then(user => res.status(201).json(user)) // Added status code
//         .catch(err => res.status(400).json(err)); // Added status code
// });

// // Put to update user by id route
// router.put('/api/users/:id', (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' })) // Added 404 handling
//         .catch(err => res.status(400).json(err)); // Added status code
// });

// // Delete user by id route
// router.delete('/api/users/:id', (req, res) => {
//     User.findOneAndDelete({ _id: req.params.id })
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with that ID' })) // Added 404 handling
//         .catch(err => res.status(500).json(err)); // Added status code
// });

// // Remove a user's associated friends when deleted route
// router.delete('/api/users/:userId/friends/:friendId', (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $pull: { friends: req.params.friendId } },
//         { new: true }
//     )
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' })) // Added 404 handling
//         .catch(err => res.status(500).json(err)); // Added status code
// });

// // Add a new friend to a user's friend list route
// router.post('/api/users/:userId/friends/:friendId', (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $addToSet: { friends: req.params.friendId } },
//         { new: true }
//     )
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' })) // Added 404 handling
//         .catch(err => res.status(500).json(err)); // Added status code
// });

// // Delete to remove a friend from a user's friend list route
// router.delete('/api/users/:userId/friends/:friendId', (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $pull: { friends: req.params.friendId } },
//         { new: true }
//     )
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' })) // Added 404 handling
//         .catch(err => res.status(500).json(err)); // Added status code
// });

// module.exports = router;


const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

router.get('/', thoughtController.getThoughts);
router.get('/:id', thoughtController.getSingleThought);
router.post('/', thoughtController.createThought);
router.put('/:id', thoughtController.updateThought);
router.delete('/:id', thoughtController.deleteThought);
router.post('/:thoughtId/reactions', thoughtController.addReaction);
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;
