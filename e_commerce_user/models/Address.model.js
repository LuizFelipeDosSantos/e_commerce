const { Schema, model } = require("mongoose");

const addressSchema = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Address = model("Address", addressSchema);

module.exports = Address;
