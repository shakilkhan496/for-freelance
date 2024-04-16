const Autre = require('../models/autre');
const Like = require('../models/like');

exports.createAutre = (req, res, next) => {
    const autre = new Autre({
        title: req.body.title,
        description: req.body.description,
        descriptionComplete: req.body.descriptionComplete,
        contenu: req.body.contenu,
        categories: req.body.categories,
        caracteristiques: req.body.caracteristiques,
        marque: req.body.marque,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        produitId: req.body.produitId,
        userId: req.body.userId,
    });
    autre.save().then(
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

exports.createCart = (req, res, next) => {
    const autre = new Autre({
        title: req.body.title,
        description: req.body.description,
        descriptionComplete: req.body.descriptionComplete,
        contenu: req.body.contenu,
        categories: req.body.categories,
        caracteristiques: req.body.caracteristiques,
        marque: req.body.marque,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        produitId: req.body.produitId,
        userId: req.body.userId,
    });
    autre.save().then(
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

exports.likeAutre = (req, res, next) => {
    Like.findOne({ produitId: req.params.id })
        .then(like => {
            if (!like) {
                const newLike = new Like({ produitId: req.params.id, like: [req.body.userId] });
                newLike.save()
                    .then(() => res.status(201).json({ message: "Like ajouté avec succès" }))
                    .catch(error => res.status(400).json({ error }));
            } else {
                if (like.like.includes(req.body.userId)) {
                    like.like = like.like.filter(userId => userId !== req.body.userId);
                } else {
                    like.like.push(req.body.userId);
                }
                like.save()
                    .then(() => res.status(200).json({ message: "Like modifié avec succès" }))
                    .catch(error => res.status(400).json({ error }));
            }
        })
        .catch(error => res.status(404).json({ error }));
};

exports.getOneAutre = (req, res, next) => {
    Autre.findOne({
        _id: req.params.id
    }).then(
        (autre) => {
            res.status(200).json(autre);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.getAllAutre = (req, res, next) => {
    Autre.find().then(
        (autre) => {
            res.status(200).json(autre);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.updateAutre = (req, res, next) => {
    const autre = new Autre({
        title: req.body.title,
        description: req.body.description,
        descriptionComplete: req.body.descriptionComplete,
        contenu: req.body.contenu,
        categories: req.body.categories,
        caracteristiques: req.body.caracteristiques,
        marque: req.body.marque,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        produitId: req.body.produitId,
        userId: req.body.userId,
    });
    Autre.updateOne({ _id: req.params.id }, autre).then(
        () => {
            res.status(201).json({
                message: 'Autre updated successfully!'
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

exports.deleteAutre = (req, res, next) => {
    Autre.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
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