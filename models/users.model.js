const { DataTypes, Model } = require('sequelize');

class Users extends Model {}

module.exports = (sequelize) => {
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, freezeTableName: true, modelName: 'users_table' },
  );
  return Users;
};
