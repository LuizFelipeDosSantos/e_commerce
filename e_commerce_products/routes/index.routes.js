const router = require("express").Router();
const productRoutes = require("./product.routes");

router.use("/", productRoutes);

module.exports = router;
