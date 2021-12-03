const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderUserId: String,
  orderAmount: Number,
  orderDate: { type: Date, default: Date.now },
  orderState: String,
  oderTaxe: Number,
  orderDetail: [
    {
      productId: Number,
      price: Number,
    },
  ],
  orderDeliverAddress: String,
  orderBillingAddress: String,
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;