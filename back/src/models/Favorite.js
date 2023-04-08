const { DataTypes } = require("sequelize")

module.exports = (database)=>{
    database.define("Favorite",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        stats:{
            type:DataTypes.ENUM('Alive','Dead','unknown'),
            defaultValue: 'Alive',
        },
        species:{
            type:DataTypes.STRING,
        },
        gender:{
            type:DataTypes.STRING,
        },
        origin:{
            type:DataTypes.STRING,
        },
        image:{
            type:DataTypes.STRING,
            isUrl: true,
        },
    })
}