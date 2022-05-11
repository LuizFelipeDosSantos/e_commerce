const mongoose = require("mongoose");
const User = require("../models/User.model");
const Address = require("../models/Address.model");

class UserRepository {

    async findUser(email) {
        const userFound = await User.findOne({ email }); 
        return userFound;
    }

    async findUserById(id) {
        const userFound = await User.findById(id); 
        return userFound;
    }

    async createUser(email, password, username, firstName, lastName) {
        const user = await User.create({
            email,
            password,
            username,
            firstName,
            lastName,
            adresses: [],
            wishlist: []
        });
        return user;
    }

    async createAddress(address) {
        const { street, number, plz, city, country } = address;

        const newAddress = await Address.create({
            street,
            number,
            plz,
            city,
            country
        });
        return newAddress;
    }

    async addUserAddress(userId, addressId) {
        const user = this.findUserById(userId);

        user.adresses.push(addressId);
        await user.save();
    }

    async editAddress(address) {
        const { street, number, plz, city, country } = address;

        await Address.findByIdAndUpdate(address._id, {
            street,
            number,
            plz,
            city,
            country
        });
    }

    async deleteAddress(addressId) {
        await Address.findByIdAndDelete(addressId);
    }

    async removeUserAddress(userId, addressId) {
        const user = this.findUserById(userId);

        user.adresses.splice(user.adresses.indexOf(addressId), 1);
        await user.save();
    }
}

module.exports = UserRepository;