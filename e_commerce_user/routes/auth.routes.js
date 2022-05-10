const router = require("express").Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const saltRounds = 12;

const User = require("../models/User.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

router.post("/signup", isLoggedOut, async (req, res) => {
  const { email, password, username, firstName, lastName } = req.body;

  if (!email) {
    return res.status(400).json({ errorMessage: "Please provide your email." });
  }

  if (password.length < 8) {
    return res.status(400).json({ errorMessage: "Your password needs to be at least 8 characters long." });
  }

  const userFound = await User.findOne({ email });
  if (userFound) {
    return res.status(400).json({ errorMessage: "Email already taken." });
  }

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      password: hashedPassword,
      username,
      firstName,
      lastName,
      adresses: [],
      wishlist: []
    });
    req.session.user = user;
    return res.status(201).json(user);
  
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
});

router.post("/login", isLoggedOut, async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ errorMessage: "Please provide your email." });
  }

  if (password.length < 8) {
    return res.status(400).json({errorMessage: "Your password needs to be at least 8 characters long." });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ errorMessage: "Wrong credentials." });
  }

  try {
    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isSamePassword) {
      return res.status(400).json({ errorMessage: "Wrong credentials." });
    }
    req.session.user = user;

    return res.json(user);
      
  } catch (error) {
    return res.status(500).render("login", { errorMessage: err.message });
  }
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }
    res.json({ message: "Done" });
  });
});

module.exports = router;
