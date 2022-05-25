const router = require("express").Router();
const ShoppingService = require("../services/shopping.service");
const service = new ShoppingService();

router.get("/", async (req, res) => {
    try {
        const { userId } = req.query;
        const cart = await service.getCart(userId);

        return res.status(200).json({ cart });   
    } catch (error) {
        return res.status(400).json({ errorMessage: error.errorMessage });
    }
});

router.post("/addProduct", async (req, res) => {
    try {
        const { userId, product, quantity, amount } = req.body;
        await service.addProductCart(userId, product, quantity, amount);

        return res.status(200).json({ message: "Successfully added." });   
    } catch (error) {
        return res.status(400).json({ errorMessage: error.errorMessage });
    }
});

router.delete("/removeProduct", async (req, res) => {
    try {
        const { userId, productId, amount } = req.query;
        await service.removeProductCart(userId, productId, amount);

        return res.status(200).json({ message: "Successfully removed." });   
    } catch (error) {
        return res.status(400).json({ errorMessage: error.errorMessage });
    }
});

module.exports = router;