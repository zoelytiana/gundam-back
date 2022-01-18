const Product = require("../models/product");

//Chercher tous les produits
module.exports = {
    getAll(req, res) {
        console.log('getAll:')
        Product.find().then(products => {
            res.send(products)
        })
    }
}


//chercher un produit donné
module.exports.getId = (req, res) => {
    console.log('id:', req.params._id)
    Product.findOne({ _id: req.params._id }).then((product) => {
      res.status(200).json(product);
    });
  };


//recherche des produits en promotion : supérieur à la valeur qu query
  module.exports.findAllProductDiscount = (req, res) => {
    console.log('productDiscount:',req.query)
    Product.find({ productDiscount: { $gt: req.query.productDiscount }  })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });

  };