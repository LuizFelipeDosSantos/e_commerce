const mongoose = require("mongoose");
const Product = require("../models/Product.model");

class ProductRepository {

    async getProducts() {
        const products = await Product.find();
        return products;
    }

    async createProduct(product) {
        const { name, description, imgUrl, category, price } = product;

        const newProduct = await Product.create({
            name,
            description,
            imgUrl,
            category,
            price,
            available: true
        });
        return newProduct;
    }

    async editProduct(product) {
        const { name, description, imgUrl, category, available } = product;

        await Product.findByIdAndUpdate(product._id, {
            name,
            description,
            imgUrl,
            category,
            price,
            available
        });
    }

    async deleteProduct(productId) {
        await Product.findByIdAndDelete(productId);
    }

}

module.exports = ProductRepository;