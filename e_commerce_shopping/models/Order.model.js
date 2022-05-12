const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId },
    address: { type: Schema.Types.ObjectId },
    amount: Number,
    status: String,
    items: [{ product: { type: Schema.Types.ObjectId },
              quantity: Number }],
  },
  {
    timestamps: true,
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;