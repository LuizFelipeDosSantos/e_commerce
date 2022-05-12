const ShoppingRepository = require("../repositories/shopping.repository");

class ShoppingService {

    constructor() {
        this.repository = new ShoppingRepository();
    }

    async getCart(userId) {
        const cart = await this.repository.getCart(userId);
        if(cart) return cart;

        const newCart = await this.repository.createCart(userId);
        return newCart;
    }

    async addProductCart(userId, productId, quantity, amount) {
        await this.repository.addProductCart(userId, productId, quantity, amount);
    }

    async removeProductCart(userId, productId, amount) {
        await this.repository.removeProductCart(userId, productId, amount);
    }

}

module.exports = ShoppingService;