const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
let databaseReady = false;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gov-schemes';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  databaseReady = true;
  console.log('✅ MongoDB connected successfully');
}).catch(err => {
  databaseReady = false;
  console.error('❌ MongoDB connection error:', err);
});

// Import Routes
const schemeRoutes = require('./routes/schemes');
const userRoutes = require('./routes/users');
const eligibilityRoutes = require('./routes/eligibility');
const checklistRoutes = require('./routes/checklist');

// Use Routes
app.use('/api/schemes', schemeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/eligibility', eligibilityRoutes);
app.use('/api/checklist', checklistRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.status(databaseReady ? 200 : 503).json({
    status: databaseReady ? 'Server and database are running' : 'Server is running but database is unavailable',
    database: databaseReady ? 'connected' : 'disconnected',
    timestamp: new Date()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
