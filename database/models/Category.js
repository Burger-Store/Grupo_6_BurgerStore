module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "Category", //Opcional
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.Burger),{
            as: "categories",
            foreignKey: "category_id",
        }
    }
    return Category;
}