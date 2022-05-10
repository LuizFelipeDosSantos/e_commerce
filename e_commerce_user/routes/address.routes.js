const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/list", isLoggedIn, (req, res) => {
  res.json(req.user);
});

router.post("/create", isLoggedIn, (req, res) => {

});

router.put("/edit", isLoggedIn, (req, res) => {

});

router.delete("/delete", isLoggedIn, (req, res) => {

});

module.exports = router;