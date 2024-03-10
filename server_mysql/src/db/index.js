import mysql from 'mysql';

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'sql6.freemysqlhosting.net',
  port: 3306,
  username: 'sql6690048',
  password: 'AJTWmZ79qD',
  database: 'sql6690048'
});

export default sequelize;


// export default db;
// Create a MySQL connection pool
// const db = mysql.createPool({
//     connectionLimit: 10,
//     host: 'sql6.freemysqlhosting.net',
//     user: 'sql6689651',
//     password: 'YAtl8BFBcC',
//     database: 'sql6689651',
//     port: 3306
// });

// // Test the database connection
// db.getConnection((err, connection) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//     } else {
//         console.log('Connected to MySQL database');
//         connection.release();
//     }
// });