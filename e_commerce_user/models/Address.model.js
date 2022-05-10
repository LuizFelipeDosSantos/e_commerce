const { Schema, model } = require("mongoose");

const addressSchema = new Schema(
  {
    street: {
      type: String,
      unique: true,
    },
    number: Number,
    plz: Number,
    city: String,
    country: String,
  },
  {
    timestamps: true,
  }
);

const Address = model("Address", addressSchema);

module.exports = Address;
