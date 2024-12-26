const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: 'Email already exists' });
        }

        // Створення користувача
        const user = new User({ name, email, password }); // Пароль хешується через pre('save')
        await user.save();

        res.status(201).send({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).send({ error: 'Error registering user', details: err.message });
    }
});



router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
        res.send({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).send({ error: 'Error logging in', details: err.message });
    }
});




module.exports = router;