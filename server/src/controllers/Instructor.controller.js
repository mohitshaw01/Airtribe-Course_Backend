const Instructor = require('../models/instructor');

const instructorController = {
  getAllInstructors: async (req, res) => {
    try {
      const instructors = await Instructor.find();
      res.json(instructors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getInstructorById: async (req, res) => {
    try {
      const instructor = await Instructor.findById(req.params.id);
      if (instructor) {
        res.json(instructor);
      } else {
        res.status(404).json({ message: 'Instructor not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createInstructor: async (req, res) => {
    const instructor = new Instructor({
      name: req.body.name,
      email: req.body.email,
      // other fields
    });
    try {
      const newInstructor = await instructor.save();
      res.status(201).json(newInstructor);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Add other CRUD operations as needed
};

module.exports = instructorController;
