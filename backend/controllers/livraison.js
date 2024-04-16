
const Livraison = require('../models/livraison');

exports.createLivraison = (req, res, next) => {
  const livraison = new Livraison({
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse: req.body.adresse,
    codePostal: req.body.codePostal,
    ville: req.body.ville,
    numeroTel: req.body.numeroTel,
    cart: req.body.cart,
    userId: req.body.userId,
  });
  livraison.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllLivraison = (req, res, next) => {
  Livraison.find().then(
      (livraison) => {
          res.status(200).json(livraison);
      }
  ).catch(
      (error) => {
          res.status(400).json({
              error: error
          });
      }
  );
};