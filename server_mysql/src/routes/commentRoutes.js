import express from 'express';
const router = express.Router();
import commentController from '../controllers/comment.controller.js';

// Add comment API
router.post('/', commentController.addComment);

export default router;
