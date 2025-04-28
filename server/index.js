const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

// Database Connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const regRoutes = require('./routes/regRoutes');
app.use('/api/reg', regRoutes);

const PORT = process.env.PORT || 8000;

// Default Route
app.get('/', (req, res) => {
  res.status(200).send('SAIF OS backend is running!');
});

// Server Listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});