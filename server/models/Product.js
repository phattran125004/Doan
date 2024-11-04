const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  prdName: String,
  price: Number,
  prdImage: String,
  description: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
