const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WishSchema = new Schema({
  wishUserId: String,
  wishDate: { type: Date, default: Date.now },
  wishDetail: [
    {
      productId: Number
    },
  ]
});

const Wish = mongoose.model("wish", WishSchema);

module.exports = Wish;