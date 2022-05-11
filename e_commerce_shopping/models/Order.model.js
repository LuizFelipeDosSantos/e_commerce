const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId },
    address: { type: Schema.Types.ObjectId },
    amount: Number,
    status: String,
    items: [{ type: Schema.Types.ObjectId }],
  },
  {
    timestamps: true,
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;