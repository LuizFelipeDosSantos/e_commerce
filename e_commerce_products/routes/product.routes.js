const router = require("express").Router();
const ProductService = require("../services/product.service");
const service = new ProductService();

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/list", isLoggedIn, async (req, res) => {
  try {
    const products = await service.getProducts();

    return res.status(200).json({ products });
  } catch (error) {
    return res.status(400).json({ errorMessage: error.errorMessage });  
  }
});

router.post("/create", isLoggedIn, async (req, res) => {
  try {
    const { product } = req.body;

    await service.createProduct(product);

    return res.status(200).json({ message: "Successfully created." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

router.put("/edit", isLoggedIn, async (req, res) => {
  try {
    const { product } = req.body;

    await service.editProduct(product);

    return res.status(200).json({ message: "Successfully updated." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

router.delete("/delete", isLoggedIn, async (req, res) => {
  try {
    const { productId } = req.query;

    await service.deleteProduct(productId);

    return res.status(200).json({ message: "Successfully deleted." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

module.exports = router;