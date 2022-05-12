const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId },
    amount: Number,
    items: [{ product: { type: Schema.Types.ObjectId }, 
              quantity: Number }],
  },
  {
    timestamps: true,
  }
);

const Cart = model("Cart", cartSchema);

module.exports = Cart;
