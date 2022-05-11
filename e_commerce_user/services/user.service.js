const UserRepository = require("../repositories/user.repository");
const bcrypt = require("bcrypt");
const saltRounds = 12;

class UserService {

    constructor() {
        this.repository = new UserRepository();
    }

    async signUp(email, password, username, firstName, lastName) {
        if (!email) {
            throw new Error("Please provide your email.");
        }

        if (password.length < 8) {
            throw new Error("Your password needs to be at least 8 characters long.");
        }

        const userFound = await this.repository.findUser(email);
        if (userFound) {
            throw new Error("Email already taken.");
        }

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await this.repository.createUser(email, hashedPassword, username, firstName, lastName);

        return newUser;
    }

    async login(email, password) {
        if (!email) {
            throw new Error("Please provide your email.");
        }

        if (password.length < 8) {
            throw new Error("Your password needs to be at least 8 characters long.");
        }

        const user = await this.repository.findUser(email);
        if (!user) {
            throw new Error("Email not found.");
        }

        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword) {
            throw new Error("Wrong password.");
        }

        return user;              
    }

    async getAdresses(userId) {
        const user = await this.repository.findUserById(userId);
        await user.populate('adresses');

        return user.adresses;
    }

    async createAddress(userId, address) {
        const newAddress = await this.repository.createAddress(address);
        await this.repository.addUserAddress(userId, newAddress._id);
    }

    async editAddress(address) {
        await this.repository.editAddress(address);
    }

    async deleteAddress(userId, addressId) {
        await this.repository.removeUserAddress(userId, addressId);
        await this.repository.deleteAddress(addressId);
    }

    async getWishlist(userId) {
        const wishlist = await this.repository.getWishlist(userId);
        return wishlist;
    }

    async addProductWishlist(userId, productId) {
        await this.repository.addProductWishlist(userId, productId);
    }

    async removeProductWishlist(userId, productId) {
        await this.repository.removeProductWishlist(userId, productId);
    }
}

module.exports = UserService;