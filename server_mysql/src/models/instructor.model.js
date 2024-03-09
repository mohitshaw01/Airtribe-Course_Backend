// write instructor model here
import DataTypes from 'sequelize';
import db from '../db/index.js';

const instructor = db.define('instructor', {
  instructor_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  instructor_name: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  courses: {
    type: DataTypes.ARRAY(DataTypes.INTEGER), // id of courses
    allowNull: false
  }
});

export default instructor;
