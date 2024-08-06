// // routes/api/userRoutes.js
// const router = require('express').Router();
// const User = require('../../models/User');
// const userController = require('../../controllers/userController');
// // Get all users route
// // router.get('/', (req, res) => {
// //     User.find({})
// //         .then(users => res.json(users))
// //         .catch(err => res.status(500).json({ error: err.message }));
// // });
// router.get('/', userController.getUsers);

// // Get one user by id route and populate thought and friend data
// router.get('/:id', (req, res) => {
//     User.findById(req.params.id)
//         .populate('thoughts')
//         .populate('friends')
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with that ID' }))
//         .catch(err => res.status(500).json({ error: err.message }));
// });

// // Post a new user route
// // router.post('/', (req, res) => {
// //     User.create(req.body)
// //         .then(user => res.status(201).json(user))
// //         .catch(err => res.status(400).json({ error: err.message }));
// // });
// router.post('/', userController.createUser);

// // Put to update user by id route
// router.put('/api/users/:id', (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' }))
//         .catch(err => res.status(400).json({ error: err.message }));
// });

// // Delete user by id route
// router.delete('/api/users/:id', (req, res) => {
//     User.findOneAndDelete({ _id: req.params.id })
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with that ID' }))
//         .catch(err => res.status(500).json({ error: err.message }));
// });

// // Remove a user's associated friends when deleted route
// router.delete('/api/users/:userId/friends/:friendId', (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $pull: { friends: req.params.friendId } },
//         { new: true }
//     )
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' }))
//         .catch(err => res.status(500).json({ error: err.message }));
// });

// // Add a new friend to a user's friend list route
// router.post('/api/users/:userId/friends/:friendId', (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $addToSet: { friends: req.params.friendId } },
//         { new: true }
//     )
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' }))
//         .catch(err => res.status(500).json({ error: err.message }));
// });

// // Delete to remove a friend from a user's friend list route
// router.delete('/api/users/:userId/friends/:friendId', (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $pull: { friends: req.params.friendId } },
//         { new: true }
//     )
//         .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' }))
//         .catch(err => res.status(500).json({ error: err.message }));
// });

const router = require('express').Router();
const userController = require('../../controllers/userController');

// Get all users route
router.get('/', userController.getUsers);

// Get one user by id route and populate thought and friend data
router.get('/:id', userController.getSingleUser);

// Post a new user route
router.post('/', userController.createUser);

// Put to update user by id route
router.put('/:id', userController.updateUser);

// Delete user by id route
router.delete('/:id', userController.deleteUser);

// Add a new friend to a user's friend list route
router.post('/:userId/friends/:friendId', userController.addFriend);

// Delete to remove a friend from a user's friend list route
router.delete('/:userId/friends/:friendId', userController.removeFriend);

module.exports = router;
