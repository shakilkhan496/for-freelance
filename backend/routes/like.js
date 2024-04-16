const express = require('express');
const router = express.Router();

const likeCtrl = require('../controllers/like');

router.post('/:id', likeCtrl.addLike);
router.delete('/:id', likeCtrl.removeLike);

module.exports = router;
