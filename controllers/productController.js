const Product = require('../models/product');

// Controller functions for product-related operations
const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  },
};

module.exports = productController;
