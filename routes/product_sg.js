const ProductController = require("../controllers/product.js");

module.exports = (server) => {
  server.get("/products", ProductController.getAll);
server.get("/product/:id", ProductController.getOneProduct);
  
  }; //
