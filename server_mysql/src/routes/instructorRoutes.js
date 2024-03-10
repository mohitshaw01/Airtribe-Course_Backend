import express from "express";
import { newInstructor , updateInstructor , getAllInstructors , getInstructorById  , deleteInstructor} from "../controllers/instructor.controller.js";

const instructorRouter = express.Router();

instructorRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Instructors router" });
});
console.log("instructor router")
instructorRouter.post("/newInstructor", newInstructor);
console.log("instructor router")

instructorRouter.put("/updateInstructor/:id", updateInstructor);

instructorRouter.get('/getall',  getAllInstructors);

instructorRouter.get('/id/:id', getInstructorById);

instructorRouter.delete('/delete/:id',deleteInstructor);

export default instructorRouter;
