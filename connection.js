const {Sequelize} = require("sequelize");
module.exports = sequelize = new Sequelize('temple','root','',{
    host : 'localhost',
    dialect : 'mysql'
});