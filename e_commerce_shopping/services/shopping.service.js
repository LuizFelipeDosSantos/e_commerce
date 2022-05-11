const ShoppingRepository = require("../repositories/shopping.repository");

class ShoppingService {

    constructor() {
        this.repository = new ShoppingRepository();
    }

    async getCart() {
        const cart = await this.repository.getCart();
        return cart;
    }

}

module.exports = ShoppingService;