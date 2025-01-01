const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Initialize environment variables
dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Test MongoDB connection
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server and DB are healthy!' });
});

// Routes
app.use('/api/auth', require('./routes/auth'));

// Default fallback route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
