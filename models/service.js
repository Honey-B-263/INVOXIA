const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
