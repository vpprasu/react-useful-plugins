const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../connection")

const FamilyInfo = sequelize.define("familyInfo",{
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
    address : {
        type : DataTypes.STRING,
        allowNull : true
    }
});

module.exports = FamilyInfo;