import { DataTypes } from 'sequelize';
import db from '../db/index.js';
import Lead from './lead.model.js';
import Instructor from './instructor.model.js';

const Comment = db.define('Comment', {
  commentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  leadId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  instructorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define Associations
Comment.belongsTo(Lead, { foreignKey: 'leadId' });
Lead.hasMany(Comment, { foreignKey: 'leadId' });

Comment.belongsTo(Instructor, { foreignKey: 'instructorId' });
Instructor.hasMany(Comment, { foreignKey: 'instructorId' });

export default Comment;