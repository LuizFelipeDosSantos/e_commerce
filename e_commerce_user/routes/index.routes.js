const router = require("express").Router();
const authRoutes = require("./auth.routes");
const addressRoutes = require("./address.routes");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/address", addressRoutes);

module.exports = router;
