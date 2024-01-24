module.exports = (sequelize, dataTypes) => {
    let alias = "orders";
    let cols = {
        idorders:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idusers: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        total_price: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        }
    };
    let config = {
        tableName: "orders", //Opcional
        timestamps: false
    }
    const Orders = sequelize.define(alias, cols, config);
    return Orders;
}