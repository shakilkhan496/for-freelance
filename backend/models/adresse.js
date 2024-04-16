const mongoose = require('mongoose');

const adresseSchema = mongoose.Schema({
  adresse: { type: String },
  ville: { type: String },
  codepostal: { type: String },
});

module.exports = mongoose.model('adresse', adresseSchema);