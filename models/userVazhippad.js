const { Sequelize,DataTypes} = require("sequelize");
const sequelize = require("../connection");

const UserVazhippad = sequelize.define("userVazhippad",{
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
    vazhippad : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    date : {
        type : DataTypes.STRING,
        allowNull : false

    }

});

module.exports = UserVazhippad;