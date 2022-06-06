const router = require("express").Router();
const ShoppingService = require("../services/shopping.service");
const service = new ShoppingService();

router.get("/list", async (req, res) => {
    try {
        const { userId } = req.query;
        const orders = await service.getOrders(userId);

        return res.status(200).json({ orders });   
    } catch (error) {
        return res.status(400).json({ errorMessage: error.errorMessage });
    }
});

router.post("/create", async (req, res) => {
    try {
        const { userId, addressId, amount, items } = req.body;
        await service.createOrder(userId, addressId, amount, items);

        return res.status(200).json({ message: "Successfully added." });   
    } catch (error) {
        return res.status(400).json({ errorMessage: error.errorMessage });
    }
});

module.exports = router;