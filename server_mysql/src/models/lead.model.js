import DataTypes from 'sequelize';
import db from '../db/index.js';

const Lead = db.define('Lead', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone_number: {
    type: DataTypes.STRING
  },
  linkedin_profile: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected', 'Waitlisted'),
    defaultValue: 'Pending'
  }
});

export default Lead;
