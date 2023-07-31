const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Order routes
router.get('/viewOrder', orderController.viewOrder);
router.post('/confirmOrder', orderController.confirmOrder);

module.exports = router;
