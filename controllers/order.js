const Order = require("../models/order");

module.exports.getAllOrders = (req, res) => {
  Order.find().then((order) => {
    res.json(order);
  });
};
module.exports.getOneOrder = (req, res) => {
  Order.findOne({ _id: req.params.id }).then((order) => {
    res.status(200).json(order);
  });
};
module.exports.deleteOrder = (req, res) => {
  Order.deleteOne({ _id: req.params.id }).then((order) => {
    res.status(200).json(order);
  });
};
module.exports.postOrder = (req, res, next) => {
  const AddOrder = new Order({
    orderUserId: req.body.orderUserId,
    orderAmount: req.body.orderAmount,
    orderDate: req.body.date,

    orderState: req.body.orderState,
    oderTaxe: req.body.orderTaxe,
    orderDetail: req.body.orderDetail,

    orderDeliverAddress: req.body.orderDeliverAddress,
    orderBillingAddress: req.body.orderBillingAddress,
  });
  AddOrder.save().then(() => {
    res.status(201).json({
      data: AddOrder,
      message: "Command saved",
    });
  });
};
