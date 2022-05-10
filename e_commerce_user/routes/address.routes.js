const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/address/list", isLoggedIn, (req, res) => {
  res.json(req.user);
});

router.post("/address/create", isLoggedIn, (req, res) => {

});

router.put("/address/edit", isLoggedIn, (req, res) => {

});

router.delete("/address/delete", isLoggedIn, (req, res) => {

});

module.exports = router;