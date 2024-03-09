const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// GET all courses
router.get('/', courseController.getAllCourses);

// GET course by ID
router.get('/:id', courseController.getCourseById);

// POST create new course
router.post('/', courseController.createCourse);

// Add other routes for update and delete operations if needed

module.exports = router;
