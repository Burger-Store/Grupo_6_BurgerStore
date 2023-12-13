const db = require('../../../database/models')

const productList = (req,res) => {
    let burger = db.Products.findAll() 
        .then(function(burger){
            res.render('menu',{burger: burger})
        })
}
module.exports = productList;