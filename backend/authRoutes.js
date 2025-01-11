const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/token', authController.createToken);

module.exports = router;
