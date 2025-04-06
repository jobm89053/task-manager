// routes/authRoutes.js

const express = require('express');
//const { register } = require('../controllers/authController');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Маршрут для регистрации
router.post('/register', register);
router.post('/login', login);

module.exports = router;