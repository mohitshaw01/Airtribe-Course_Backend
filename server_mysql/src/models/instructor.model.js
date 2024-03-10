import { DataTypes } from 'sequelize';
import db from '../db/index.js';

const instructor = db.define('instructor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Use autoIncrement for primary key
  },
  name: {
    type: DataTypes.STRING, // Correct data type for name field
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  courses: {
    type: DataTypes.TEXT, // Change data type to TEXT
    allowNull: true // Set allowNull to true if courses can be null
  }
});

export default instructor;
