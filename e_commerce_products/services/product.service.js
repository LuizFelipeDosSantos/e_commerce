const ProductRepository = require("../repositories/product.repository");

class ProductService {

    constructor() {
        this.repository = new ProductRepository();
    }

    async getProducts() {
        const products = await this.repository.getProducts();
        return products;
    }

    async createProduct(product) {
        await this.repository.createProduct(product);
    }

    async editProduct(product) {
        await this.repository.editAddress(product);
    }

    async deleteProduct(productId) {
        await this.repository.deleteAddress(productId);
    }
}

module.exports = ProductService;