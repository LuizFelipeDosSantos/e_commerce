const mongoose = require("mongoose");
const Cart = require("../models/Cart.model");
const Order = require("../models/Order.model");

class ShoppingRepository {

    async getCart(userId) {
        const cart = await Cart.findOne({ user: userId });
        return cart;
    }

    async createCart(userId) {
        const newCart = await Cart.create({ 
            user: userId,
            amount: 0,
            items: []
        });
        return newCart;
    }

    async addProductCart(userId, productId, quantity, amount) {
        const cart = await Cart.findOne({ user: userId });

        cart.items.push({ product: productId, quantity});
        cart.amount += amount;

        await cart.save();
    }

    async removeProductCart(userId, productId, amount) {
        const cart = await Cart.findOne({ user: userId });

        cart.items.splice(cart.items.findIndex(item => item.product === productId), 1);
        cart.amount -= amount;

        await cart.save();
    }

    async getOrders(userId) {
        const orders = await Order.find({ user: userId });
        return orders;
    }

    async createOrder(userId, addressId, amount, items) {
        await Order.create({
            user: userId,
            address: addressId,
            amount,
            status: "Delivered",
            items
        });
    }

}

module.exports = ShoppingRepository;