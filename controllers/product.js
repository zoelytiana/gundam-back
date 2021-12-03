const Product = require("../models/product");
module.exports = {
    getAll(req, res) {
        Product.find().then(products => {
            res.send(products)
        })
    },
    getId(req, res) {
        const id = req.params._id;
        Product.findById(id).then(product => {
            res.send(product)
        })
    }
}