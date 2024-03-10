import Comment from '../models/comment.model.js';

const addComment = async (req, res) => {
  try {
    const { lead_id, instructor_id, comment } = req.body;
    const newComment = await Comment.create({ lead_id, instructor_id, comment });
    res.status(201).json(newComment);
  } catch (err) {
    console.error('Error adding comment:', err);
    res.status(500).send('Internal Server Error');
  }
};

export {addComment}