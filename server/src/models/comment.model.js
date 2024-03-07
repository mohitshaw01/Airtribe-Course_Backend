import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead' },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
    comment: String
});

module.exports = mongoose.model('Comment', CommentSchema);
