const User = require('../models/user');

// Controller functions for user-related operations
const userController = {
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      // You may want to validate the input data here before creating the user
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  },
};

module.exports = userController;
