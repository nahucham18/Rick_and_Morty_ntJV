require("dotenv").config();

const {USER,PASSWORD,HOST,PORT,BDD} = process.env
const { Sequelize, DataTypes } = require('sequelize');
const CharacterModel = require("./models/Character");
const EpisodeModel = require("./models/Episode")

const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
    { logging: false}
);

CharacterModel(database);
EpisodeModel(database);

const { Character, Episode } = database.models;
Character.belongsToMany(Episode,{ through:"CharacterEpisode"});
Episode.belongsToMany(Character,{ through:"CharacterEpisode"});


module.exports = database;