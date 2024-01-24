module.exports = (sequelize, dataTypes) => {
    let alias = "usertype";
    let cols = {
        idusertype:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        type:{
            type: dataTypes.STRING(45),
            allowNull: false,
        } 
        
    };
    let config = {
        tableName: "usertype", //Opcional
        timestamps: false
    }
    const Usertype = sequelize.define(alias, cols,config);
    return Usertype;
}