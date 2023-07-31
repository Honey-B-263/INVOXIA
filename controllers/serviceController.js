const Service = require('../models/service');

// Controller functions for service-related operations
const serviceController = {
  getAllServices: async (req, res) => {
    try {
      const services = await Service.find();
      res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch services' });
    }
  },
};

module.exports = serviceController;
