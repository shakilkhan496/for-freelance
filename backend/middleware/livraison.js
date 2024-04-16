const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const produitId = decodedToken.produitId;
       req.livraison = {
        produitId: produitId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};