//const products = require('../../database/products.json');
const db = require('../../../database/models');

const postNewProduct = (req,res) => {
    db.Products.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.file.filename,
    })
    res.redirect('/products');
}

module.exports = postNewProduct;