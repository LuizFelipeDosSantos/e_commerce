const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/adresses", (req, res) => {
  res.json(req.user);
});

module.exports = router;