const router = require("express").Router();
const ShoppingService = require("../services/shopping.service");
const service = new ShoppingService();

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, async (req, res) => {
    try {
        const cart = await service.getCart(req.session.user._id);

        return res.status(200).json({ cart });   
    } catch (error) {
        return res.status(400).json({ errorMessage: error.errorMessage });
    }
});

router.post("/addProduct", isLoggedIn, async (req, res) => {
    try {
        const { productId, quantity, amount } = req.body;
        await service.addProductCart(req.session.user._id, productId, quantity, amount);

        return res.status(200).json({ message: "Successfully added." });   
    } catch (error) {
        return res.status(400).json({ errorMessage: error.errorMessage });
    }
});

router.put("/removeProduct", isLoggedIn, async (req, res) => {
    try {
        const { productId, amount } = req.body;
        await service.removeProductCart(req.session.user._id, productId, amount);

        return res.status(200).json({ message: "Successfully removed." });   
    } catch (error) {
        return res.status(400).json({ errorMessage: error.errorMessage });
    }
});

module.exports = router;