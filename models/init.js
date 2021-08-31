'use strict';

const path = require('path');
const { Sequelize } = require('sequelize');

const env = 'development';
const config = require(path.join(__dirname, '../config/config.json'))[env];

// Получаем данные для подключения
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.papassword,
  {
    dialect: config.dialect,
  },
);

const Users = require('./users.model')(sequelize);
const Products = require('./products.model')(sequelize);

Users.hasMany(Products, { foreignKey: 'userId' });
Products.belongsTo(Users, { foreignKey: 'userId' });
Users.hasMany(Products, { foreignKey: 'buyerId' });
Products.belongsTo(Users, { foreignKey: 'buyerId' });

module.exports = { Users, Products };
