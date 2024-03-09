const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

// GET all instructors
router.get('/', instructorController.getAllInstructors);

// GET instructor by ID
router.get('/:id', instructorController.getInstructorById);

// POST create new instructor
router.post('/', instructorController.createInstructor);

// Add other routes for update and delete operations if needed

module.exports = router;
