'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('companies', 'createdAt'),
    await queryInterface.removeColumn('companies', 'updatedAt'),
    await queryInterface.removeColumn('users', 'createdAt'),
    await queryInterface.removeColumn('users', 'updatedAt')
  },

  async down (queryInterface, Sequelize) {
  }
};
