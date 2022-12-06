'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'alex@gmail.com',
        password: 'alex123'
      },
      {
        id: 2,
        email: 'eric@gmail.com',
        password: 'eric123'
      },
      {
        id: 3,
        email: 'zake@gmail.com',
        password: 'zake123'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
