const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Cart routes
router.post('/addToCart', cartController.addToCart);
router.delete('/removeFromCart', cartController.removeFromCart);
router.delete('/clearCart', cartController.clearCart);
router.get('/viewCart', cartController.viewCart);

module.exports = router;
