const mongoose = require("mongoose");

const retourSchema = mongoose.Schema({
  userId: { type: String },
  commentaire: { type: String },
  rating: { type: Number },
});

module.exports = mongoose.model("Retour", retourSchema);
