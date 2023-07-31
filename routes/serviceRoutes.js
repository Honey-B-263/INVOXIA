const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Service routes
router.get('/getAllServices', serviceController.getAllServices);

module.exports = router;
