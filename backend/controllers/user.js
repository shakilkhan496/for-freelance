const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.getUserById = (req, res, next) => {
  const userId = req.params.userId; // Assurez-vous que votre route inclut le paramètre userId

  User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé !' });
      }
      
      // Retournez les détails de l'utilisateur
      res.status(200).json({
        userId: user._id,
        email: user.email,
        // Ajoutez d'autres propriétés de l'utilisateur selon vos besoins
      });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.modifyUserEmail = (req, res, next) => {
  const userId = req.params.userId; // Utilisez le userId directement à partir des paramètres de la requête
  const newEmail = req.body.newEmail;

  // Mettez en œuvre la logique pour mettre à jour l'email dans la base de données
  User.findByIdAndUpdate(userId, { email: newEmail }, { new: true })
    .then(updatedUser => {
      if (!updatedUser) {
        return res.status(404).json({ error: 'Utilisateur non trouvé.' });
      }
      res.status(200).json({ message: 'Email modifié avec succès.' });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '360h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};