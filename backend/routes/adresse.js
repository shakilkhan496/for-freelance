const express = require('express');
const router = express.Router();

const adresseCtrl = require('../controllers/adresse');

router.get('/', adresseCtrl.getAllAdresse);
router.post('/:id', adresseCtrl.createAdresse);
router.get('/:id', adresseCtrl.getOneAdresse);
router.put('/:id', adresseCtrl.updateAdresse);
router.delete('/:id', adresseCtrl.deleteAdresse);

module.exports = router;
