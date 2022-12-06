'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      {
        id: 1,
        회사명: '네이버',
        국가: '한국',
        지역: '판교',
        email: 'Naver@gmail.com',
        password: 'naver123'
      },
      {
        id: 2,
        회사명: '쿠팡',
        국가: '한국',
        지역: '서울',
        email: 'Cupang@gmail.com',
        password: 'cupang123'
      },
      {
        id: 3,
        회사명: '카카오',
        국가: '한국',
        지역: '부산',
        email: 'Kakao@gmail.com',
        password: 'kakao123'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};
