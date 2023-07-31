const CartItem = require('../models/cartItem');

// Controller functions for cart-related operations
const cartController = {
  addToCart: async (req, res) => {
    try {
      const { itemId, quantity } = req.body;
      // You may want to validate the input data here before adding to the cart
      const cartItem = new CartItem({ itemId, quantity });
      await cartItem.save();
      res.status(201).json({ message: 'Item added to cart', cartItem });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add item to cart' });
    }
  },

  removeFromCart: async (req, res) => {
    try {
      const { itemId } = req.body;
      await CartItem.findOneAndDelete({ itemId });
      res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove item from cart' });
    }
  },

  clearCart: async (req, res) => {
    try {
      await CartItem.deleteMany();
      res.status(200).json({ message: 'Cart cleared' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to clear cart' });
    }
  },

  viewCart: async (req, res) => {
    try {
      const cartItems = await CartItem.find();
      res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ error: 'Failed to view cart' });
    }
  },
};

module.exports = cartController;
