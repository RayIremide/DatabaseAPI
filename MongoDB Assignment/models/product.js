const mongoose = require("mongoose");
const shortid =require("shortid")

//Define a Schema
const Schema = mongoose.Schema;

// Define the Product Schema
const productSchema = new Schema({
  product_id: {
    type: String,
    default:shortid.generate,
    required: true
  },
  product_name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  category_id: {
    type: String,
    default:shortid.generate
  },
  supplier_id: {
    type: String,
    default:shortid.generate
  },
  unit_price: {
    type: String,
    required: false
  },
  quantity: {
    type: String
  },
  reorder_point: {
    type: String
  }
});

module.exports = mongoose.model("Product", productSchema);

