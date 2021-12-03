const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderUserId: String,
  orderAmount: Number,
  orderDate: {
    date: Number,
  },
  orderState: Boolean,
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
