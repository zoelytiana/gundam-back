const ProductController = require("../controllers/product.js");

module.exports = (server) => {
    //AFFICHER LES PRODUITS
    server.get("/products", (req, res) => {
        ProductController.getAll(req, res);
    })
}

