import { DataTypes } from 'sequelize';
import db from '../db/index.js';
import Instructor from './instructor.model.js'; // Import Instructor model

const Course = db.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  max_seats: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  instructorId: { // Correct foreign key field name
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Instructor,
      key: 'id'
    }
  }
});

Course.belongsTo(Instructor, { foreignKey: 'instructorId' });

export default Course;
