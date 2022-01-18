const WishController = require("../controllers/wish.js");
const auth = require('../middleware/auth');

module.exports = (server) => {
  //GESTION USERS
  //pour tester si un utilisateur a déjà le souhait
  server.post("/wish/user/:userId",auth, WishController.existWish);
  //affichage des souhaits d'un utilisateur
  server.get("/wishes/:userId",auth, WishController.getWishes);
  //affichage d'un souhait d'un utilisateur
  server.get("/wish/:id",auth, WishController.getOneWish);
  //suppression de souhait
  server.put("/wish/user/:userId",auth, WishController.removeWish);
  //ajout de souhait
  server.post("/wish",auth, WishController.postWish);
  //mise à jour du souhait
  server.put("/wish/:userId",auth, WishController.putWish);

}; 
