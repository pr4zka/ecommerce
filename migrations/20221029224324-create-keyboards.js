'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Keyboards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      disign: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      switch: {
        type: Sequelize.STRING
      },
      ilumination: {
        type: Sequelize.STRING
      },
      distribution: {
        type: Sequelize.STRING
      },
      connection: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Keyboards');
  }
};