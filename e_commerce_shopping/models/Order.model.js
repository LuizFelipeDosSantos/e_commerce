const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId },
    address: { type: Schema.Types.ObjectId },
    amount: Number,
    status: String,
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

const Order = model("Order", orderSchema);

module.exports = Order;