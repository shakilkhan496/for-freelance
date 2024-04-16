const mongoose = require('mongoose');

const produitsSchema = mongoose.Schema({
  categories: { type: Number },
  titre: { type: String },
  description: { type: String },
  descriptionComplete: { type: String },
  produitId: { type: Number },
  prix: { type: Number },
  stock: { type: Number },
  imageUrl: { type: String },
  marque: { type: String },
  contenu: { type: String },
  caracteristiques: { type: String },
  fdp: { type: Number },
  string: { type: String },
  number: { type: Number },
});

module.exports = mongoose.model('Produits', produitsSchema);