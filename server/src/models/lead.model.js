import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    name: String,
    email: String,
    phone_number: String,
    linkedin_profile: String,
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected', 'Waitlisted'], default: 'Pending' }
});

module.exports = mongoose.model('Lead', LeadSchema);
