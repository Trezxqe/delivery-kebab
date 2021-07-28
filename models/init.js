'use strict';

const path = require('path');
const { Sequelize } = require('sequelize');

const env = 'development';
const config = require(path.join(__dirname, '../config/config.json'))[env];

// Получаем данные для подключения
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    port: config.port,
    dialect: config.dialect,
  },
);

const Users = require('./users.model')(sequelize);
const Products = require('./products.model')(sequelize);

Users.hasMany(Products, { foreignKey: 'userId' });
Products.belongsTo(Users, { foreignKey: 'userId' });

// const Posts = require('./posts.model')(sequelize);

// Users.hasMany(Posts, { foreignKey: 'authorId' });
// Posts.belongsTo(Users, { foreignKey: 'authorId' });

module.exports = { Users, Products };
