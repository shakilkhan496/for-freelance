const express = require('express');
const router = express.Router();

const autreCtrl = require('../controllers/autre');
const userCtrl = require('../controllers/user');

router.get('/', autreCtrl.getAllAutre);
router.post('/', autreCtrl.createAutre, userCtrl.login);
router.post('/cart', autreCtrl.createCart);
router.get('/:id', autreCtrl.getOneAutre);
router.put('/:id/like', autreCtrl.likeAutre, userCtrl.login);
router.put('/:id', autreCtrl.updateAutre, userCtrl.login);
router.delete('/:id', autreCtrl.deleteAutre, userCtrl.login);

module.exports = router;