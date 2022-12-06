'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    static associate(models) {
    }
  }
  companies.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    회사명: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    국가: DataTypes.STRING,
    지역: DataTypes.STRING,
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'companies',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return companies;
};