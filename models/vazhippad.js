const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const Vazhippad = sequelize.define("vazhippad", {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
})

module.exports = Vazhippad;