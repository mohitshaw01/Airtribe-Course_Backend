import express from "express";
import { createCourse, getCourses, registerCourse } from "../controllers/course.controller.js";
import { createComment, getLeads, searchLead, updateLeadDetails,createLead } from "../controllers/lead.controller.js";


const router = express.Router();

router.get("/", getCourses);
router.post("/", createCourse);
router.post("/:courseId/register", registerCourse);
router.get("/:courseId/leads", getLeads);
router.put("/:courseId/lead/:leadId", updateLeadDetails);
router.get("/:courseId/searchLead", searchLead);
// register leads for a course
router.post("/:courseId/lead", createLead);


export default router;