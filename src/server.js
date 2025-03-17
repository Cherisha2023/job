const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection setup
const pool = new Pool({
  user: 'cherisha.s',
  host: 'localhost',
  database: 'job',
  password: 'Cheri@123',
  port: 5432, // Default PostgreSQL port
});

// Route to handle job creation
app.post('/jobs', async (req, res) => {
  const { title, company, experience, location, salary } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO jobs (title, company, experience, location, salary) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, company, experience, location, salary]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting job:', error);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
