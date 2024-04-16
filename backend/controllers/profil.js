const Profil = require('../models/profil');

// Récupérer tous les profils
exports.getAllProfil = async (req, res, next) => {
  try {
    const profils = await Profil.find();
    res.status(200).json(profils);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Créer un profil avec l'ID spécifié dans l'URL
exports.createProfil = async (req, res, next) => {
  try {
      const userId = req.params.id; // Utilisation de l'ID fourni dans l'URL
      const { nom, prenom, pseudo, pp } = req.body;

      // Vérifier si le profil existe déjà
      const existingProfil = await Profil.findById(userId);
      if (existingProfil) {
          return res.status(400).json({ message: 'Profil déjà existant.' });
      }

      // Créer une instance de Profil avec l'ID fourni dans l'URL
      const newProfil = new Profil({ _id: userId, nom, prenom, pseudo, pp });

      const savedProfil = await newProfil.save();
      res.status(201).json(savedProfil);
  } catch (error) {
      res.status(500).json({ error });
  }
};
  

// Récupérer un profil par ID
exports.getOneProfil = async (req, res, next) => {
  try {
    const profil = await Profil.findById(req.params.id);
    if (!profil) {
      return res.status(404).json({ message: 'Profil non trouvé' });
    }
    res.status(200).json(profil);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Mettre à jour un profil par ID
exports.updateProfil = async (req, res, next) => {
  try {
    const updatedProfil = await Profil.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProfil) {
      return res.status(404).json({ message: 'Profil non trouvé' });
    }
    res.status(200).json(updatedProfil);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Supprimer un profil par ID
exports.deleteProfil = async (req, res, next) => {
  try {
    const deletedProfil = await Profil.findByIdAndDelete(req.params.id);
    if (!deletedProfil) {
      return res.status(404).json({ message: 'Profil non trouvé' });
    }
    res.status(200).json({ message: 'Profil supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
