const OrderController = require("../controllers/order.js");

module.exports = (server) => {
  //GESTION USERS

  server.get("/order", OrderController.getAllOrder);
  //   server.get("/order/:id", OrderController.getOneOrder);
  //   server.put("/order/:id", OrderController.putOneOrder);
}; //