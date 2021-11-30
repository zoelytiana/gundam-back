const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema ( {
    id : Number,
    productCode: String,
    productName: String,
    productPrice: String,
    productWeight: String,
    productShortDesc: String,
    productLongDesc: String,
    productPic: String,
    productUderCategory: String,
    productUpdateDate: Date,
    productCreateDate: Date,
    productStock: Number,
    productLocation: String,
    productDiscount: String,
    productSize: String,
    productMaterial: Array,
    productAgeRequired: Number,
    productColor: Array,
    productManufacturer: Array
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;