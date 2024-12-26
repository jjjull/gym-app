const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Import and use auth routes
const mongoose = require('./src/db'); // MongoDB connection
const authRoutes = require('./src/routes/auth');
app.use('/api/auth', authRoutes);

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})