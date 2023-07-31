const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, refPath: 'itemType', required: true },
  itemType: { type: String, enum: ['Product', 'Service'], required: true },
  quantity: { type: Number, default: 1 },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
