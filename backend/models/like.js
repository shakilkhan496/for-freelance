const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
