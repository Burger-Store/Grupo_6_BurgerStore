module.exports = (sequelize, dataTypes) => {
    let alias = "category";
    let cols = {
        idcategory:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(30),
            allowNull: false
        }
    };
    let config = {
        tableName: "category", //Opcional
        timestamps: false
    }
    
    const Category = sequelize.define(alias, cols, config);
    Category.associate = models => {
        Category.hasMany(models.products,{
            as: "Products",
            foreignKey: "idcategory"
        })
    }
   
    return Category;
}