const express = require('express');
const router = express.Router();

const profilCtrl = require('../controllers/profil');

router.get('/', profilCtrl.getAllProfil);
router.post('/:id', profilCtrl.createProfil);
router.get('/:id', profilCtrl.getOneProfil);
router.put('/:id', profilCtrl.updateProfil);
router.delete('/:id', profilCtrl.deleteProfil);

module.exports = router;
