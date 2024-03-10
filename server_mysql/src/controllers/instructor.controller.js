import express from "express";
import { createError } from "../utils/createError.js";
import Instructor from "../models/instructor.model.js";

const instructorRouter = express.Router();

export const newInstructor = async (req, res, next) => {
  try {
    const { id, name , email ,courses } = req.body;
    console.log(req.body)

    if (!id || !name || !email || !courses) {
      // If any required property is missing, respond with a 400 Bad Request error
      return res.status(400).json({ error: 'Missing required fields in the request body' });
    }

    const instructor = await Instructor.create({ id, name , email ,courses });
    res.status(201).json(instructor);
  } catch (error) {
    // Pass the error to the Express error handling middleware
    console.log(error)
    // createError(error)
  }
};


export const updateInstructor = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [updatedRowsCount, updatedInstructor] = await Instructor.update(req.body, {
      where: { id },
      returning: true,
    });
    if (updatedRowsCount === 0) {
      return next(createError(404, "Instructor not found"));
    }
    res.status(200).json(updatedInstructor[0]);
  } catch (error) {
    next(createError());
  }
};

export const getAllInstructors = async (req, res, next) => {
  try {
    const instructors = await Instructor.findAll();
    res.status(200).json(instructors);
  } catch (error) {
    next(createError());
  }
};

export const getInstructorById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const instructor = await Instructor.findByPk(id);
    if (!instructor) {
      return next(createError(404, "Instructor not found"));
    }
    res.status(200).json(instructor);
  } catch (error) {
    next(createError());
  }
};

export const deleteInstructor = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedRowsCount = await Instructor.destroy({ where: { id } });
    if (deletedRowsCount === 0) {
      return next(createError(404, "Instructor not found"));
    }
    res.status(204).json({ message: "Instructor deleted successfully" });
  } catch (error) {
    next(createError());
  }
};

export default instructorRouter;
