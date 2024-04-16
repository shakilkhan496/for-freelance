const Item = require('../models/Item');

async function likeItem(req, res) {
  const itemId = req.params.id;
  const userId = req.user.id; // récupérer l'ID de l'utilisateur connecté à partir du JWT
  try {
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    // Vérifier si l'utilisateur a déjà aimé cet élément
    if (item.likes.includes(userId)) {
      return res.status(400).json({ message: 'User already liked this item' });
    }
    // Ajouter l'ID de l'utilisateur à la liste des likes
    item.likes.push(userId);
    await item.save();
    res.json({ likesCount: item.likes.length, isLiked: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}
