import mongoose from 'mongoose';

const InstructorSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    bio: String
});

module.exports = mongoose.model('Instructor', InstructorSchema);
