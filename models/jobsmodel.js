const { Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../database/configuration');
const{User} = require('./usermodel');

const Jobs = sequelize.define("Jobs", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userId',
        }},
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    company: DataTypes.STRING,
    salary: DataTypes.INTEGER,
  });
  

  
  module.exports = {Jobs};