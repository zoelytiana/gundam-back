const OrderController = require("../controllers/order.js");

module.exports = (server) => {
  //GESTION USERS

  //affichage de tous les commandes
  server.get("/orders", OrderController.getAllOrders);
  //affiche d'une commande
  server.get("/order/:id", OrderController.getOneOrder);
  //suppression d'une commande
  server.delete("/order/:id", OrderController.deleteOrder);
  //ajout d'une commande
  server.post("/order/", OrderController.postOrder);
  //   server.get("/order/:id", OrderController.getOneOrder);
  //   server.put("/order/:id", OrderController.putOneOrder);
}; //
