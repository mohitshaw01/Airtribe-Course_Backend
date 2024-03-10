import express from "express";
import { createInstructor, getInstructors, getInstructorById, getInstructorCourses, updateCourseDetails } from "../controllers/instructor.controller.js";
import { createCourse } from "../controllers/course.controller.js";
import { createComment, getLeads } from "../controllers/lead.controller.js";

const router = express.Router();

router.get("/:id", getInstructorById);
router.get("/", getInstructors);
router.post("/", createInstructor);
router.post("/:instructorId/course", createCourse);
router.get("/:instructorId/courses", getInstructorCourses);
router.put("/:instructorId/course/:courseId", updateCourseDetails);
router.post("/:instructorId/course/:courseId/lead/:leadId/comment", createComment);
export default router;


