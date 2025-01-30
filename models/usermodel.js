const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../database/configuration');

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    

  })
  module.exports ={User};