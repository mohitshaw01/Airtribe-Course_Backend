const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// GET all comments
router.get('/', commentController.getAllComments);

// GET comment by ID
router.get('/:id', commentController.getCommentById);

// POST create new comment
router.post('/', commentController.createComment);

// Add other routes for update and delete operations if needed

module.exports = router;
