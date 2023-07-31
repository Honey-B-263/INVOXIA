const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.post('/createUser', userController.createUser);

module.exports = router;
