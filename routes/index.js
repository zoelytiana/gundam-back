const ProductController = require("../controllers/product.js");

module.exports = (server) => {
  //AFFICHER LES PRODUITS
  server.get("/products", (req, res) => {
    ProductController.getAll(req, res);
  });

  //AFFICHER LES DETAILS DES PRODUITS AVEC UN ID
  server.get("/products/:_id", (req, res) => {
    ProductController.getId(req, res);
  });

  //AFFICHER LES PRODUITS EN DISCOUNT
  server.get("/productsFilter", (req, res) => {
    ProductController.findAllProductDiscount(req, res);
  });
};
