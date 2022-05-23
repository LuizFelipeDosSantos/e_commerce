const router = require("express").Router();
const UserService = require("../services/user.service");
const service = new UserService();

router.get("/list", async (req, res) => {
  try {
    const { userId } = req.query;
    const wishlist = await service.getWishlist(userId);

    return res.status(200).json({ wishlist });
  } catch (error) {
    return res.status(400).json({ errorMessage: error.errorMessage });  
  }
});

router.post("/add", async (req, res) => {
  try {
    const { product, userId } = req.body;

    await service.addProductWishlist(userId, product);

    return res.status(200).json({ message: "Successfully added." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

router.delete("/remove", async (req, res) => {
  try {
    const { productId, userId } = req.query;

    await service.removeProductWishlist(userId, productId);

    return res.status(200).json({ message: "Successfully removed." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

module.exports = router;