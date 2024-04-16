const Adresse = require('../models/adresse');

// Récupérer tous les profils
exports.getAllAdresse = async (req, res, next) => {
  try {
    const adresses = await Adresse.find();
    res.status(200).json(adresses);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Créer un profil avec l'ID spécifié dans l'URL
exports.createAdresse = async (req, res, next) => {
  try {
      const userId = req.params.id; // Utilisation de l'ID fourni dans l'URL
      const { nom, prenom, pseudo, pp } = req.body;

      // Vérifier si le profil existe déjà
      const existingAdresse = await Adresse.findById(userId);
      if (existingAdresse) {
          return res.status(400).json({ message: 'Adresse déjà existant.' });
      }

      // Créer une instance de Profil avec l'ID fourni dans l'URL
      const newAdresse = new Adresse({ _id: userId, nom, prenom, pseudo, pp });

      const savedAdresse = await newAdresse.save();
      res.status(201).json(savedAdresse);
  } catch (error) {
      res.status(500).json({ error });
  }
};
  

// Récupérer un profil par ID
exports.getOneAdresse = async (req, res, next) => {
  try {
    const adresse = await Adresse.findById(req.params.id);
    if (!adresse) {
      return res.status(404).json({ message: 'Adresse non trouvé' });
    }
    res.status(200).json(adresse);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Mettre à jour un profil par ID
exports.updateAdresse = async (req, res, next) => {
  try {
    const updatedAdresse = await Adresse.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAdresse) {
      return res.status(404).json({ message: 'Adresse non trouvé' });
    }
    res.status(200).json(updatedAdresse);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Supprimer un profil par ID
exports.deleteAdresse = async (req, res, next) => {
  try {
    const deletedAdresse = await Adresse.findByIdAndDelete(req.params.id);
    if (!deletedAdresse) {
      return res.status(404).json({ message: 'Adresse non trouvé' });
    }
    res.status(200).json({ message: 'Adresse supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
