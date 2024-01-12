module.exports = (sequelize, dataTypes) => {
    let alias = "products";
    let cols = {
        idproducts:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        idcategory: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "products", //Opcional
        timestamps: false
    }
    const Products = sequelize.define(alias, cols, config);
    return Products;
}
