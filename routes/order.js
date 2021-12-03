const OrderController = require("../controllers/order.js");

module.exports = (server) => {
  //GESTION USERS

  server.get("/orders", OrderController.getAllOrders);
  server.get("/order/:id", OrderController.getOneOrder);
  server.delete("/order/:id", OrderController.deleteOrder);
  server.post("/order/", OrderController.postOrder);
  //   server.get("/order/:id", OrderController.getOneOrder);
  //   server.put("/order/:id", OrderController.putOneOrder);
}; //
