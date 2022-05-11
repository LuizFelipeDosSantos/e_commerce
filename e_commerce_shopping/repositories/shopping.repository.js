const mongoose = require("mongoose");
const Cart = require("../models/Cart.model");
const Order = require("../models/Order.model");

class ShoppingRepository {

    async getCart() {
        const cart = await Cart.find();
        return cart;
    }

}

module.exports = ShoppingRepository;