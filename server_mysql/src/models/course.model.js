import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Course = db.define('Course', {
  courseId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maxSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instructorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Course;