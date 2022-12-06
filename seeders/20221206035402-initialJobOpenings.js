'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('job_openings', [
      {
        id: 1,
        company_id: 1,
        채용포지션: 'IOS Developer',
        채용보상금: 500000,
        사용기술: 'Swift',
        채용내용: '네이버에서 IOS 개발자를 채용합니다',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        id: 2,
        company_id: 2,
        채용포지션: 'Server Developer',
        채용보상금: 500000,
        사용기술: 'Node.js',
        채용내용: '쿠팡에서 Server 개발자를 채용합니다',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        id: 3,
        company_id: 3,
        채용포지션: 'Android Developer',
        채용보상금: 500000,
        사용기술: 'Java',
        채용내용: '카카오에서 Android 개발자를 채용합니다',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        id: 4,
        company_id: 2,
        채용포지션: 'Web Frontend Developer',
        채용보상금: 500000,
        사용기술: 'JavaScript',
        채용내용: '쿠팡에서 Web Frontend 개발자를 채용합니다',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        id: 5,
        company_id: 1,
        채용포지션: 'Android Developer',
        채용보상금: 500000,
        사용기술: 'Java',
        채용내용: '네이버에서 Android 개발자를 채용합니다',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('job_openings', null, {});
  }
};
