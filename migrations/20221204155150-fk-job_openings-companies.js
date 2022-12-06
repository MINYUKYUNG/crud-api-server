'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('job_openings', { // 참조 하는 자식 테이블
      fields: ['company_id'],
      type: 'foreign key',
      name: 'fk_job_openings_companies',
      references: { // 참조 당하는 부모 테이블
        table: 'companies',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('job_openings', 'fk_job_openings_companies');
  }
};
