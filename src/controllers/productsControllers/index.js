const getAllProducts = require('./getAllProducts');
const getProductById = require('./getProductById');
const formCreateProduct = require('./formCreateProduct');
const postNewProduct = require('./postNewProduct');
const deleteProduct = require('./deleteProduct');
const editProduct= require('./editProduct');

module.exports = {
    getAllProducts,
    getProductById,
    formCreateProduct,
    postNewProduct,
    deleteProduct,
    editProduct
}