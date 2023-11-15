module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        name:{
            type: dataTypes.STRING
        } ,
        surname: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.INT
        },
        address: {
            type: dataTypes.STRING
        },
        lift: {
            type: dataTypes.STRING
        },
        city: {
            type: dataTypes.STRING
        },
        state: {
            type: dataTypes.STRING
        },
        zipcode: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        

    };
    let config = {
        tableName: "Users", //Opcional
        timestamps: false
    }
    const User = sequelize.define(alias, cols,config);
    return User;
}
