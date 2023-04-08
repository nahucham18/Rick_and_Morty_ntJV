const { DataTypes } = require("sequelize")

module.exports = (database) =>{
    database.define("User",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            isEmail:true,
            allowNull:false,
            len:[5,30],
        }
    },
    {
        tomestamps: false,
    })
}