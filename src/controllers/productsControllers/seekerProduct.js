const db = require('../../../database/models');

const seekerProduct = async (req,res) => {
    const products = await db.Products.findAll({ 
        where: {
            name: req.body.search 
        } 
    })
    if (!products) {
        console.log('Not found!');
    } else {
        res.render('products', {product : product})
    }
}

module.exports = seekerProduct;