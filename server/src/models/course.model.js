import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
    name: String,
    max_seats: Number,
    start_date: Date
});

module.exports = mongoose.model('Course', CourseSchema);
