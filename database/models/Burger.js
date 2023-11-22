module.exports = (sequelize, dataTypes) => {
    let alias = "Burger";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INT
        },
        category: {
            type: dataTypes.INT
        },
        image: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "Burger", //Opcional
        timestamps: false
    }
    const Burger = sequelize.define(alias, cols, config);

    //Relationship
    Burger.associate = function(models) {
        Burger.belongsToMany(models.category),{
            as: "categories",
            through: "BurgerCategory",
            foreignKey: "category_id",
            otherKey: "burgerCategory_id",
            timestamps: false,
        }
    }
    return Burger;
}

/*
{
        "id": 1,
        "name": "American Burger Simple",
        "description": "Medallón de carne con cheddar, tomate, lechuga y cebolla",
        "price": "2700",
        "category": "Hamburguesa",
        "image": "1695687360426_product.jpg"
    }
*/