import DataTypes from 'sequelize';
import db from '../db/index.js';

const Comment = db.define('Comment', {
  comment: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default Comment;
