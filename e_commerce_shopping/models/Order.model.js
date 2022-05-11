const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
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

const Order = model("Order", orderSchema);

module.exports = Order;