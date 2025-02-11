// const { Thought, User } = require('../models');

// module.exports = {
//   // Get all thoughts
//   getThoughts(req, res) {
//     Thought.find()
//       .then((thoughts) => res.json(thoughts))
//       .catch((err) => res.status(500).json({ error: err.message }));
//   },

//   // Get a single thought by ID
//   getSingleThought(req, res) {
//     Thought.findById(req.params.id)
//       .then((thought) =>
//         !thought
//           ? res.status(404).json({ message: 'No thought with that ID' })
//           : res.json(thought)
//       )
//       .catch((err) => res.status(500).json({ error: err.message }));
//   },

//   // Create a new thought
//   createThought(req, res) {
//     Thought.create(req.body)
//       .then((thought) => {
//         return User.findOneAndUpdate(
//           { _id: req.body.userId },
//           { $addToSet: { thoughts: thought._id } },
//           { new: true }
//         );
//       })
//       .then((user) =>
//         !user
//           ? res.status(404).json({ message: 'Thought created, but no user with that ID' })
//           : res.json('Created the thought 🎉')
//       )
//       .catch((err) => res.status(500).json({ error: err.message }));
//   },

//   // Update a thought by ID
//   updateThought(req, res) {
//     Thought.findOneAndUpdate(
//       { _id: req.params.id },
//       req.body,
//       { new: true, runValidators: true }
//     )
//       .then((thought) =>
//         !thought
//           ? res.status(404).json({ message: 'No thought with this id!' })
//           : res.json(thought)
//       )
//       .catch((err) => res.status(400).json({ error: err.message }));
//   },

//   // Delete a thought by ID
//   deleteThought(req, res) {
//     Thought.findOneAndRemove({ _id: req.params.id })
//       .then((thought) =>
//         !thought
//           ? res.status(404).json({ message: 'No thought with this id!' })
//           : User.findOneAndUpdate(
//               { thoughts: req.params.id },
//               { $pull: { thoughts: req.params.id } },
//               { new: true }
//             )
//       )
//       .then((user) =>
//         !user
//           ? res.status(404).json({ message: 'Thought deleted but no user with this id!' })
//           : res.json({ message: 'Thought successfully deleted!' })
//       )
//       .catch((err) => res.status(500).json({ error: err.message }));
//   },

//   // Add a reaction to a thought
//   addReaction(req, res) {
//     Thought.findOneAndUpdate(
//       { _id: req.params.thoughtId },
//       { $addToSet: { reactions: req.body } },
//       { new: true, runValidators: true }
//     )
//       .then((thought) =>
//         !thought
//           ? res.status(404).json({ message: 'No thought with this id!' })
//           : res.json(thought)
//       )
//       .catch((err) => res.status(500).json({ error: err.message }));
//   },

//   // Remove a reaction from a thought
//   removeReaction(req, res) {
//     Thought.findOneAndUpdate(
//       { _id: req.params.thoughtId },
//       { $pull: { reactions: { reactionId: req.params.reactionId } } },
//       { new: true }
//     )
//       .then((thought) =>
//         !thought
//           ? res.status(404).json({ message: 'No thought with this id!' })
//           : res.json(thought)
//       )
//       .catch((err) => res.status(500).json({ error: err.message }));
//   },
// };

const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json({ error: err.message }));
  },

  // Get a single thought by ID
  getSingleThought(req, res) {
    Thought.findById(req.params.id)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json({ error: err.message }));
  },

  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) =>
        User.findByIdAndUpdate(
          req.body.userId,
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought created, but found no user with that ID',
            })
          : res.json('Created the thought 🎉')
      )
      .catch((err) => res.status(500).json({ error: err.message }));
  },

  // Update a thought by ID
  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json({ error: err.message }));
  },

  // Delete a thought by ID
  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.id)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : User.findByIdAndUpdate(
              thought.userId,
              { $pull: { thoughts: thought._id } },
              { new: true }
            )
      )
      .then(() => res.json({ message: 'Thought and associated reactions deleted!' }))
      .catch((err) => res.status(500).json({ error: err.message }));
  },

  // Add a reaction to a thought
  addReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { new: true, runValidators: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json({ error: err.message }));
  },

  // Remove a reaction from a thought
  removeReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true, runValidators: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json({ error: err.message }));
  },
};
