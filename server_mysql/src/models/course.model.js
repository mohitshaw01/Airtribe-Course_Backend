import DataTypes from 'sequelize';
import db from '../db/index.js';

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
    allowNull: false
  }
});

export default Course;
