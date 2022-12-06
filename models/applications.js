'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class applications extends Model {
    static associate(models) {
    }
  }
  applications.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    company_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    job_opening_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'applications',
  });
  return applications;
};