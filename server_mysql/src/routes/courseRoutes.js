import express from "express";
import { createCourse, getCourses, registerCourse } from "../controllers/course.controller.js";
import { createComment, getLeads, searchLead, updateLeadDetails } from "../controllers/lead.controller.js";


const router = express.Router();

router.get("/", getCourses);
router.post("/", createCourse);
router.post("/:courseId/registerlead", registerCourse);
router.get("/:courseId/lead", getLeads);
router.put("/:courseId/lead/:leadId", updateLeadDetails);
router.get("/:courseId/searchlead", searchLead);


export default router;