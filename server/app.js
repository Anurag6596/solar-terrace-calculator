require('dotenv').config();
const connectDB = require('./models/db');
const express = require('express');
const cors = require('cors');
const saveCalculationRoute = require('./routes/saveCalculation');

const app = express();

// Dynamic CORS origin function
const allowedOrigins = [
  'solarroofcalc.netlify.app',
  'https://solar-terrace-calculator.onrender.com', // <-- add your render domain here
  // 'https://your-production-domain.com' // <-- add your prod domain here
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc.)
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

connectDB();

app.use('/api/save-calculation', saveCalculationRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});