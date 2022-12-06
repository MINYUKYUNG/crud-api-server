'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job_openings extends Model {
    static associate(models) {
    }
  }
  job_openings.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    company_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    채용포지션: DataTypes.STRING,
    채용보상금: DataTypes.INTEGER,
    사용기술: DataTypes.STRING,
    채용내용: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'job_openings',
  });
  return job_openings;
};