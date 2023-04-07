require("dotenv").config();

const {USER,PASSWORD,HOST,PORT,BDD} = process.env

const { Sequelize, DataTypes } = require('sequelize');

const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`
);


database.define("Character",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.ENUM('Alive','Dead','unknown'),
        defaultValue: 'Alive',
    },
    origin: {
            type: DataTypes.STRING,
    },
    species: {
        type:DataTypes.STRING,
    },
});


module.exports = database;