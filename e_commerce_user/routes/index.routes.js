const router = require("express").Router();
const authRoutes = require("./auth.routes");
const addressRoutes = require("./address.routes");
const wishlistRoutes = require("./wishlist.routes");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/address", addressRoutes);
router.use("/wishlist", wishlistRoutes);

module.exports = router;
