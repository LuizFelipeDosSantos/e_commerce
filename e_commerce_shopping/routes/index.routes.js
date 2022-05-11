const router = require("express").Router();
const cartRoutes = require("./cart.routes");
const orderRoutes = require("./order.routes");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);

module.exports = router;
