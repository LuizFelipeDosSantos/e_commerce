const router = require("express").Router();
const UserService = require("../services/user.service");
const service = new UserService();

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/list", isLoggedIn, async (req, res) => {
  try {
    const wishlist = await service.getWishlist(req.session.user._id);

    return res.status(200).json({ wishlist });
  } catch (error) {
    return res.status(400).json({ errorMessage: error.errorMessage });  
  }
});

router.post("/add", isLoggedIn, async (req, res) => {
  try {
    const { productId } = req.body;

    await service.addProductWishlist(req.session.user._id, productId);

    return res.status(200).json({ message: "Successfully added." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

router.delete("/remove", isLoggedIn, async (req, res) => {
  try {
    const { productId } = req.query;

    await service.removeProductWishlist(req.session.user._id, productId);

    return res.status(200).json({ message: "Successfully removed." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

module.exports = router;