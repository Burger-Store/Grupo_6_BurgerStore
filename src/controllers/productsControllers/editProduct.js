const products = require('../../database/products.json');
const fs = require('fs');
const path = require ('path');

const editProduct = (req, res) => {

    const { id } = req.params;

    const { name, description, price, category } = req.body;

    products.forEach((product)=>{
        if (product.id == id){
            product.id = parseInt(id);
            product.name = name;
            product.description = description;
            product.price = price;
            product.category = category;
            product.image = req.file ? req.file.filename : product.image;
        }
    });

    const productPath = path.join(__dirname, '../../database/products.json')

    const data =JSON.stringify(products);

    fs.writeFile(productPath, data, (error)=>{
        if (error){
            res.send(`Error: ${error}`);
        }else{
            res.redirect('/products')
        }
    })
}

module.exports = editProduct;