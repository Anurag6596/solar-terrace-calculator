require('dotenv').config();
const connectDB = require('./models/db');
const express = require('express');
const cors = require('cors');
const saveCalculationRoute = require('./routes/saveCalculation');

const app = express();

const allowedOrigins = [
  'https://solarroofcalc.netlify.app',
  'https://solar-terrace-calculator.onrender.com',
  // Add other allowed origins here
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());

// Handle preflight OPTIONS requests for all routes
app.options('*', cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

connectDB();

app.use('/api/save-calculation', saveCalculationRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});