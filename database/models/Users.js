module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        idusers:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: dataTypes.STRING(20),
            allowNull: false
        },
        surname: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        phone: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        lift: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        city: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        state: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        zipcode: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        idusertype: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "Users", //Opcional
        timestamps: false
    }
    const Users = sequelize.define(alias, cols,config);
    return Users;
}
