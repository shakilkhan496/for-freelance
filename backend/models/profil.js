const mongoose = require('mongoose');

const profilSchema = mongoose.Schema({
  nom: { type: String },
  prenom: { type: String },
  pseudo: { type: String },
  pp: { type: String },
});

module.exports = mongoose.model('Profil', profilSchema);