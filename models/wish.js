const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const Product = require('./product')


const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const WishSchema = new Schema({
  userId: {type: String, required: true, unique: true},
  wishDate: { type: Date, default: Date.now },
  wishDetail: [
    
      {type: ObjectId, unique: true, ref: Product}
    
  ]
});

WishSchema.plugin(uniqueValidator);

const Wish = mongoose.model("wish", WishSchema);

module.exports = Wish;