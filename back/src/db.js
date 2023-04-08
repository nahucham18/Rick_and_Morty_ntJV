require("dotenv").config();

const {USER,PASSWORD,HOST,PORT,BDD} = process.env
const { Sequelize, DataTypes } = require('sequelize');
const CharacterModel = require("./models/Character");

const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`
);

CharacterModel(database);


module.exports = database;