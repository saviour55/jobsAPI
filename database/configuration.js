const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('jobsapi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = {sequelize};