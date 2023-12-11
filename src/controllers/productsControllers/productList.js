const db = require('../../../database/models')

const productList = (req,res) => {
    db.products.findAll()
        .then(function(burgers){
            console.log(burger);
            res.render(menu,{burger: burgers})
        })
}
module.exports = productList;