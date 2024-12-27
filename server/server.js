const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors());

// тест route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Імпорт і використання auth routes
const mongoose = require('./src/db'); // підключення MongoDB 
const authRoutes = require('./src/routes/auth');
app.use('/api/auth', authRoutes);

// старт сервера
const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})