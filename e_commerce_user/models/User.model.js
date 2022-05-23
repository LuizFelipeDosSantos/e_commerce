const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    adresses: [{ type: Schema.Types.ObjectId, ref: 'Address' }],
    wishlist: [{ _id: { type: Schema.Types.ObjectId},
                 name: { type: String},
                 description: {type: String},
                 imgUrl: { type: String},
                 category: { type: String},
                 available: {type: Boolean},
                 price: { type: Number}
              }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
