import express from 'express';
// import courseRoutes from './routes/courseRoutes.js';
// import leadRoutes from './routes/leadRoutes.js';
// import commentRoutes from './routes/commentRoutes.js';
import db from './db/index.js';

const app = express();

db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to MySQL database');
        connection.release();
    }
}); 

//
app.use('/courses', courseRoutes);
// app.use('/leads', leadRoutes);
// app.use('/comments', commentRoutes);

// Example route to fetch data from the database
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        if (error) {
            res.status(500).send('Error retrieving users from database');
        } else {
            res.json(results);
        }
    });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
