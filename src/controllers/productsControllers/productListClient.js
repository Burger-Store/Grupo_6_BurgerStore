const db = require('../../../database/models')

const productListClient = (req,res) => {
    let burger = db.products.findAll() 
        .then(function(burger){
            res.render('index',{burger: burger})
        })
}
module.exports = productListClient;