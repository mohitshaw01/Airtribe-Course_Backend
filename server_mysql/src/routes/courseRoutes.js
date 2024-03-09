import express from 'express';
import courseController from '../controllers/course.controller.js';

// Create course API
const router = express.Router();
router.post('/', courseController.createCourse);

// Update course details API
router.put('/:courseId', courseController.updateCourse);

export default router;
