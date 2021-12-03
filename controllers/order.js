const Order = require("../models/order");

module.exports.getAllOrders = (req, res) => {
  Order.find().then((orders) => {
    res.json(orders);
  });
};
