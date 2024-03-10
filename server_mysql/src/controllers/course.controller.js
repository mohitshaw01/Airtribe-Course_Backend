import Course from '../models/course.model.js';

const createCourse = async (req, res) => {
  console.log(req.body)
  try {
    const { instructorId, name, max_seats} = req.body;
    const course = await Course.create({  name, max_seats, start_date : Date.now(),instructorId });
    res.status(201).json(course);
    return course;
    console.log(req.body)
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

const registerCourse = async (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const { name, email, phone_number, linkedin_profile } = req.body;
  const lead = {
      lead_id: lead.length + 1,
      course_id: courseId,
      name,
      email,
      phone_number,
      linkedin_profile,
      status: 'Pending'
  };
  lead.push(lead);
  res.json(lead);
};

export  {updateCourse, createCourse,registerCourse}