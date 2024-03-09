const Comment = require('../models/comment');

const commentController = {
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCommentById: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      if (comment) {
        res.json(comment);
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createComment: async (req, res) => {
    const comment = new Comment({
      lead_id: req.body.lead_id,
      instructor_id: req.body.instructor_id,
      comment_text: req.body.comment_text,
      // other fields
    });
    try {
      const newComment = await comment.save();
      res.status(201).json(newComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Add other CRUD operations as needed
};

module.exports = commentController;
