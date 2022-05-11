const mongoose = require("mongoose");
const User = require("../models/User.model");

class UserRepository {

    async findUser(email) {
        const userFound = await User.findOne({ email }); 
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
}

module.exports = UserRepository;