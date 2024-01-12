const db = require('../../../database/models')

const productListClient = (req,res) => {
    let burger = db.products.findAll() 
        .then(function(burger){
            res.render('burgerStore',{burger: burger})
        })
}
module.exports = productListClient;