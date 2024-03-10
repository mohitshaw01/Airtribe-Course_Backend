import express from 'express';
import {updateCourse,createCourse,registerCourse} from '../controllers/course.controller.js';

// Create course API
const router = express.Router();
console.log("courseroutesfile")
router.post('/', createCourse);

// Update course details API
// router.put('/:courseId', updateCourse);
// router.post(':courseId/register', registerCourse);

export default router;
