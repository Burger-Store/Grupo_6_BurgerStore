const editProductForm = (req,res) => {
   let burger = db.Burger.findByPk(req.params.id)
        .then(function(burger){
            res.render('editProduct', {detail: burger})
        })
    //traer los datos que estan guardado en la base de datos
    //res.render('editProductForm');
}

module.exports = editProductForm;