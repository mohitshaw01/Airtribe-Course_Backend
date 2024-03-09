const Course = require('../models/course');

const courseController = {
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCourseById: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createCourse: async (req, res) => {
    const course = new Course({
      instructor_id: req.body.instructor_id,
      name: req.body.name,
      max_seats: req.body.max_seats,
      start_date: req.body.start_date,
      // other fields
    });
    try {
      const newCourse = await course.save();
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Add other CRUD operations as needed
};

module.exports = courseController;
