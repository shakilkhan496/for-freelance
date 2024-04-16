const express = require('express');
const router = express.Router();

const produitsCtrl = require('../controllers/produits');

router.get('/', produitsCtrl.getAllProduits);
router.post('/', produitsCtrl.createProduits);
router.get('/:id', produitsCtrl.getOneProduits);
router.put('/:id', produitsCtrl.updateProduits);
router.delete('/:id', produitsCtrl.deleteProduits);

module.exports = router;
