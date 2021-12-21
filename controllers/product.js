const Product = require("../models/product");
module.exports = {
    getAll(req, res) {
        Product.find().then(products => {
            res.send(products)
        })
    }
}

module.exports.getId = (req, res) => {
    console.log('id:',req.params._id)
    Product.findOne({ _id: req.params._id }).then((product) => {
      res.status(200).json(product);
    });
  };