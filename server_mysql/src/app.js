// import express from 'express';
import courseRoutes from './routes/courseRoutes.js';
import instructorRouter from './routes/instructorRoutes.js';
import express from 'express';
import db from './db/index.js';

const app = express();
app.use(express.json());

// Sync all defined models to the database
db.sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((err) => {
    console.error('Unable to synchronize the models:', err);
  });

app.get('/', (req, res) => {  
  res.send('Welcome to the Express Server');
});
// //
app.use('/courses', courseRoutes);
app.use("/instructors", instructorRouter);

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
