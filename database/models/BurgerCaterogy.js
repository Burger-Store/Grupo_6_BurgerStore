module.exports = (sequelize, dataTypes) => {
    let alias = "BurgerCategory";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.INTEGER
        },
        burger: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "BurgerCategory", //Opcional
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);
    return User;
}