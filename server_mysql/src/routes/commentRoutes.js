import express from 'express';
const router = express.Router();
import {addComment} from '../controllers/comment.controller.js';

// Add comment API
router.post('/', addComment);

export default router;
