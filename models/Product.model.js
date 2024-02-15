const mongoose = require("mongoose");

// the schema in our db

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "please give a product name"],
    },
    quantity: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    image: {
      type: String,
      require: false,
    },
  },
  {
    // date of creation of any objet....
    timestamps: true,
  }
);

// exporting our schema in our db

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;