const mongoose = require('mongoose');

const livraisonSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  codePostal: { type: String, required: true },
  ville: { type: String, required: true },
  numeroTel: { type: Number, required: true },
  cart: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model('Livraison', livraisonSchema);