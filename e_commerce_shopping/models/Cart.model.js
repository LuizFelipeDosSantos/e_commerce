const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    username: {
      type: String,
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

const Cart = model("Cart", cartSchema);

module.exports = Cart;
