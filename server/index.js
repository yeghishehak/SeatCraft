require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const checkoutRoutes = require('./routes/checkout.js');

const app = express();
const PORT = process.env.PORT || 4242;

// Define allowed origins for CORS
const allowedOrigins = [
  'http://localhost:4242',          // your local frontend
  'https://seatcraft.onrender.com' // replace with your live frontend domain
];

// Middleware - CORS with origin whitelist
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('CORS policy: This origin is not allowed'));
  }
}));

app.use(express.json());

// API routes
app.use('/api', checkoutRoutes);  // Mount your Stripe route at /api

// Serve React build static files
app.use(express.static(path.join(__dirname, '../client/SeatCraft/dist')));

// Catch-all to serve React's index.html for any other route (SPA support)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/SeatCraft/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
