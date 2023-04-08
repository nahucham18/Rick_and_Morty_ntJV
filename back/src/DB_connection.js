require('dotenv').config();
const { Sequelize, Model } = require('sequelize');
const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
    { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(database);
UserModel(database);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
    const { User, Favorite } = database.models;
    User.belongsToMany(Favorite,{ through:'UserFavorite'});
    Favorite.belongsToMany(User,{ through:'UserFavorite'});

module.exports = {
    conn: database,
    ...database.models,
};
