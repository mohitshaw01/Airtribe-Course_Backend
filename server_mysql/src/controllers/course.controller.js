import Course from '../models/course.model.js';

const createCourse = async (req, res) => {
  try {
    const { instructor_id, name, max_seats, start_date } = req.body;
    const course = await Course.create({ instructor_id, name, max_seats, start_date });
    res.status(201).json(course);
  } catch (err) {
    console.error('Error creating course:', err);
    res.status(500).send('Internal Server Error');
  }
};

const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const { name, max_seats, start_date } = req.body;
    await Course.update({ name, max_seats, start_date }, { where: { course_id: courseId } });
    res.status(200).send('Course details updated successfully');
  } catch (err) {
    console.error('Error updating course details:', err);
    res.status(500).send('Internal Server Error');
  }
};

export default {updateCourse, createCourse}