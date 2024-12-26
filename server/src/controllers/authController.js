const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Реєстрація користувача
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Перевірка, чи користувач вже існує
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Хешування пароля
        const hashedPassword = await bcrypt.hash(password, 10);

        // Створення нового користувача
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: 'Error registering user' });
    }
};

// Авторизація користувача
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Пошук користувача за email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Перевірка пароля
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Генерація JWT
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET || 'defaultSecretKey', // Використовуйте змінну середовища для секретного ключа
            { expiresIn: '1h' }
        );

        res.json({ message: 'Login successful', token });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Error logging in' });
    }
};
