const db = require('../../../database/models');

const postNewProduct = (req,res) => {
    db.Products.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        idcategory: req.body.category,
        image: req.file.filename,
    })
    res.redirect('/product');
    //10 products
    //10 salto
}

module.exports = postNewProduct;