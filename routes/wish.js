const WishController = require("../controllers/wish.js");
const auth = require('../middleware/auth');

module.exports = (server) => {
  //GESTION USERS
  server.post("/wish/user/:userId",auth, WishController.existWish);
  server.get("/wishes/:userId",auth, WishController.getWishes);
  server.get("/wish/:id",auth, WishController.getOneWish);
  server.put("/wish/user/:userId",auth, WishController.removeWish);
  server.post("/wish",auth, WishController.postWish);
  server.put("/wish/:userId",auth, WishController.putWish);

}; 
