const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId },
    amount: Number,
    items: [{ product: {_id: { type: Schema.Types.ObjectId},
                        name: { type: String},
                        description: {type: String},
                        imgUrl: { type: String},
                        category: { type: String},
                        available: {type: Boolean},
                        price: { type: Number} }, 
              quantity: Number }],
  },
  {
    timestamps: true,
  }
);

const Cart = model("Cart", cartSchema);

module.exports = Cart;
