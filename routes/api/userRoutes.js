// routes/api/userRoutes.js
const router = require('express').Router();
const User = require('../../models/User');

// Get all users route
router.get('/api/users', (req, res) => {
    User.find({})
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Get one user by id route and populate thought and friend data
router.get('/api/users/:id', (req, res) => {
    User.findById(req.params.id)
        .populate('thoughts')
        .populate('friends')
        .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with that ID' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Post a new user route
router.post('/api/users', (req, res) => {
    User.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Put to update user by id route
router.put('/api/users/:id', (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' }))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Delete user by id route
router.delete('/api/users/:id', (req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
        .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with that ID' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Remove a user's associated friends when deleted route
router.delete('/api/users/:userId/friends/:friendId', (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
    )
        .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Add a new friend to a user's friend list route
router.post('/api/users/:userId/friends/:friendId', (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
    )
        .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Delete to remove a friend from a user's friend list route
router.delete('/api/users/:userId/friends/:friendId', (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
    )
        .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user with this id!' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
