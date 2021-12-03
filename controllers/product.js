const Product = require("../models/product");
module.exports = {
    getAll(req, res) {
        Product.find().then(products => {
            res.send(products)
        })
    }
}