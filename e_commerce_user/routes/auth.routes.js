const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

const UserService = require("../services/user.service");
const service = new UserService();

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

router.post("/signup", isLoggedOut, async (req, res) => {
  const { email, password, username, firstName, lastName } = req.body;

  try {
    const user = await service.signUp(email, password, username, firstName, lastName);

    req.session.user = user;
    return res.status(201).json(user);
  
  } catch (error) {
    return res.status(400).json({ errorMessage: error.message });
  }
});

router.post("/login", isLoggedOut, async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await service.login(email, password);
    req.session.user = user;

    return res.status(200).json(user);
      
  } catch (error) {
    return res.status(400).json({ errorMessage: error.message });
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
