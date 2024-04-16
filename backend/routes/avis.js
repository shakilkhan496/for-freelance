const express = require("express");
const router = express.Router();

const retourController = require("../controllers/avis");

router.post("/", retourController.addRetour);

module.exports = router;
