const Retour = require("../models/avis");

exports.addRetour = async (req, res) => {
  const { userId, commentaire, rating } = req.body;
  try {
    const retour = new Retour({
      userId,
      commentaire,
      rating,
    });
    const newRetour = await retour.save();
    res.status(201).json({ message: "Retour ajouté avec succès", newRetour });
  } catch (error) {
    res.status(400).json({ error });
  }
};
