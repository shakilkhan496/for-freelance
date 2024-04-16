const Produits = require('../models/produits');

// Récupérer tous les produits
exports.getAllProduits = async (req, res) => {
  try {
    const produits = await Produits.find();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Créer un nouveau produit
exports.createProduits = async (req, res) => {
  const produit = new Produits(req.body);
  try {
    const nouveauProduit = await produit.save();
    res.status(201).json(nouveauProduit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Récupérer un produit par ID
exports.getOneProduits = async (req, res) => {
  try {
    const produit = await Produits.findById(req.params.id);
    if (produit == null) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.json(produit);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Mettre à jour un produit
exports.updateProduits = async (req, res) => {
  try {
    const produit = await Produits.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (produit == null) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.json(produit);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Supprimer un produit
exports.deleteProduits = async (req, res) => {
  try {
    const produit = await Produits.findByIdAndDelete(req.params.id);
    if (produit == null) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.json({ message: 'Produit supprimé' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
