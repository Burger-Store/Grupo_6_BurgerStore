module.exports = (sequelize, dataTypes) => {
    let alias = "pre_order";
    let cols = {
        idpre_order:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idproducts: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        idorders: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "pre_order", //Opcional
        timestamps: false
    }
    const Pre_order = sequelize.define(alias, cols, config);
    return Pre_order;
}