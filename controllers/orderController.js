const CartItem = require('../models/cartItem');
const Order = require('../models/order');
const taxCalculator = require('../utils/taxCalculator');

// Controller functions for order-related operations
const orderController = {
  viewOrder: async (req, res) => {
    try {
      const cartItems = await CartItem.find();
      const itemsWithTax = cartItems.map((item) => ({
        ...item.toObject(),
        tax: taxCalculator.calculateTax(item.itemId),
      }));
      let totalBill = 0;
      itemsWithTax.forEach((item) => {
        totalBill += (item.quantity * item.itemId.price) + item.tax;
      });
      res.status(200).json({ itemsWithTax, totalBill });
    } catch (error) {
      res.status(500).json({ error: 'Failed to view order' });
    }
  },

  confirmOrder: async (req, res) => {
    try {
      const cartItems = await CartItem.find();
      const itemsWithTax = cartItems.map((item) => ({
        ...item.toObject(),
        tax: taxCalculator.calculateTax(item.itemId),
      }));
      const totalBill = itemsWithTax.reduce((acc, item) => acc + (item.quantity * item.itemId.price) + item.tax, 0);
      const newOrder = new Order({ items: itemsWithTax, totalBill });
      await newOrder.save();
      await CartItem.deleteMany();
      res.status(200).json({ message: 'Order confirmed', order: newOrder });
    } catch (error) {
      res.status(500).json({ error: 'Failed to confirm order' });
    }
  },
};

module.exports = orderController;
