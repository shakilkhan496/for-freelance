const express = require('express');
const router = express.Router();

const livraisonCtrl = require('../controllers/livraison');
const userCtrl = require('../controllers/user');

router.get('/', livraisonCtrl.getAllLivraison);
router.post('/', livraisonCtrl.createLivraison);

module.exports = router;