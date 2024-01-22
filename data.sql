USE burgerstore_db;

INSERT INTO usertype (idusertype, type) VALUES
(DEFAULT, 'admin'),
(DEFAULT, 'user');

INSERT INTO users ( idusers, name, surname, email, password, phone, address, lift, city, state, zipcode, image,idusertype) VALUES
(DEFAULT, 'Admin', 'BurgerStore', 'admin@bstore.com', '010101','1111111111', 'Burger Store', '', 'Bella Vista', 'Argentina', '1661', '','1'),
(DEFAULT, 'Ricardo', 'Bochini', 'bocha10@outlook.com', '1234','1110101010', 'libertadores 5', '', 'Bella Vista', 'Argentina', '1661', '','2'),
(DEFAULT, 'Albeiro', 'Usuriaga', 'palomo@outlook.com', '1234','1162147710', 'Bogota 1975', '7', 'San Miguel', 'Argentina', '1663', '','2'),
(DEFAULT, 'Gustavo', 'Lopez', 'gustavito7@outlook.com', '1234','1177107777', 'Vigo 777', '', 'Bella Vista', 'Argentina', '1661', '','2'),
(DEFAULT, 'Lucrecia', 'Erico', 'lucerico@gmail.com', '1234','1122225247', 'Visera 456', '', 'Muñiz', 'Argentina', '1662', '','2'),
(DEFAULT, 'Pablo', 'Rotchen', 'morronr@msm.com', '1234','1125472232', 'Av. Central 1821', '', 'Bella Vista', 'Argentina', '1661', '','2'),
(DEFAULT, 'Carla', 'Bruni', 'brunita@mail.com','1234', '1187445959', 'Italia 315', '', 'San Miguel', 'Argentina', '1663', '','2'),
(DEFAULT, 'Margarita', 'Barrios', 'maguiie@outlook.com', '1234','1154586512', 'Urquiza 2587', '', 'San Miguel', 'Argentina', '1663', '','2'),
(DEFAULT, 'Pascual', 'Rambert', 'pascualito@gmail.com', '1234','1119951994', 'Moine 1111', '', 'Bella Vista', 'Argentina', '1661', '','2'),
(DEFAULT, 'Omar', 'Pastoriza', 'patolibertadores@mail.com', '1234','1101234567', 'Tokio 1983', '', 'Muñiz', 'Argentina', '1662', '','2'),
(DEFAULT, 'Agustina', 'Islas', 'agusmil@hotmail.com','1234', '117451117', 'Irusta 3142', '', 'Bella Vista', 'Argentina', '1661', '','2');

INSERT INTO category (idcategory, name) VALUES
(DEFAULT, 'Hamburguesas'),
(DEFAULT, 'Bebidas');

INSERT INTO products (idproducts, name, description, price, idcategory, image) VALUES 
(DEFAULT, 'American Burger Simple', 'Medallón de carne con cheddar, tomate, lechuga y cebolla', '2700', '1', '1695687360426_product.jpg'),
(DEFAULT, "American Burger Doble", "2 medallones de carne con doble cheddar, tomate, lechuga y cebolla", "3100", "1", "american_doble.jpg"),
(DEFAULT, "American Burger Triple", "3 medallones de carne con cheddar, tomate, lechuga y cebolla", "3600", "1", "american_triple.jpg"),
(DEFAULT, "Royal Simple", "Medallón de carne, cheddar, cebolla cocida, pepinillos y salsa thousand island", "3000", "1", "royal_simple.jpg"),
(DEFAULT, "Royal Doble", "2 medallones de carne, cheddar, cebolla cocida, pepinillos y salsa thousand island", "3400", "1", "royal_doble.jpg"),
(DEFAULT, "Tasty Onion Simple", "Medallón de carne, cheddar, cebolla crispy y salsa tasty", "2950", "1", "tastyonion_simple.jpg"),
(DEFAULT, "Tasty Onion Doble", "2 medallones de carne, cheddar, cebolla crispy y salsa tasty", "3400", "1", "tastyonion_doble.jpg"),
(DEFAULT, "Cheese Burger Simple", "Medallón de carne con cheddar", "2600", "1", "cheeseburger_simple.jpg"),
(DEFAULT, "Cheese Burger Doble", "2 medallones de carne con cheddar", "2950", "1", "cheeseburger_doble.jpg"),
(DEFAULT, "Cheese Burger Triple", "3 medallones de carne con cheddar", "3100", "1", "cheeseburger_triple.jpg"),
(DEFAULT, "Fried Onion Simple", "Medallón de carne con cheddar y cebolla cocinada en el mismo medallón de carne", "2700", "1", "friedonion_simple.jpg"),
(DEFAULT, "Fried Onion Doble", "2 medallones de carne con cheddar y cebolla cocinada en el mismo medallón de carne", "3100", "1", "friedonion_doble.jpg"),
(DEFAULT, "Big Raspy", "4 medallones de carne de 120gr, cheddar y panceta ahumada", "3600", "1", "bigraspy.jpg"),
(DEFAULT, "Sprite", "Sprite 2.25l", "1800", "2", "");






