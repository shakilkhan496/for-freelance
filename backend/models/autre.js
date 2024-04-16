const mongoose = require('mongoose');

const autreSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  descriptionComplete: { type: String, required: true },
  contenu: { type: String, required: true },
  categories: { type: String, required: true },
  caracteristiques: { type: String, required: true },
  marque: { type: String, required: true },
  imageUrl: { type: String, required: true },
  produitId: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
  like: {type: String},
  cart: {type: String},
});

module.exports = mongoose.model('Autre', autreSchema);