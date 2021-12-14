const WishController = require("../controllers/wish.js");

module.exports = (server) => {
  //GESTION USERS

  server.get("/wishes/:userId", WishController.getWishes);
  server.get("/wish/:id", WishController.getOneWish);
  server.put("/wish/user/:userId", WishController.removeWish);
  server.post("/wish", WishController.postWish);
  server.put("/wish/:userId", WishController.putWish);
}; 
