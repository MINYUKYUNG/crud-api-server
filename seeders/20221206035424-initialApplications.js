'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('applications', [
      {
        id: 1,
        user_id: 1,
        company_id: 1,
        job_opening_id: 1,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        id: 2,
        user_id: 2,
        company_id: 2,
        job_opening_id: 2,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        id: 3,
        user_id: 3,
        company_id: 3,
        job_opening_id: 3,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('applications', null, {});
  }
};
