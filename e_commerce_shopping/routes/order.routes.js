const router = require("express").Router();
const ShoppingService = require("../services/shopping.service");
const service = new ShoppingService();

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/list", isLoggedIn, async (req, res) => {
    try {
        const orders = await service.getOrders(req.session.user._id);

        return res.status(200).json({ orders });   
    } catch (error) {
        return res.status(400).json({ errorMessage: error.errorMessage });
    }
});

router.post("/create", isLoggedIn, async (req, res) => {
    try {
        const { addressId, amount, items } = req.body;
        await service.createOrder(req.session.user._id, addressId, amount, items);

        return res.status(200).json({ message: "Successfully added." });   
    } catch (error) {
        return res.status(400).json({ errorMessage: error.errorMessage });
    }
});

module.exports = router;