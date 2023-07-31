const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product routes
router.get('/getAllProducts', productController.getAllProducts);

module.exports = router;
