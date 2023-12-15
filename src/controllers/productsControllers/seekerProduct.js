const db = require('../../../database/models');

const seekerProduct = (req,res) => {
  
    /*db.Products.findOne.then((product) => {
        if(product){
            res.render(form,{product})
        }else{
            res.send('Product not found');
        }
    }).catch((error) => res.send(error));*/
    const Product = await 
    Product.findAll({ where: { title: req.body.search } });
    if (product === null) {
    console.log('Not found!');
    } else {
    res.render('Products', {product : product})
}

}


module.exports = seekerProduct;