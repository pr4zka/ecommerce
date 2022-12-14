'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vs_ajustes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idsucursal: {
        type: Sequelize.INTEGER
      },
      sucursal: {
        type: Sequelize.STRING
      },
      tipoajuste: {
        type: Sequelize.STRING
      },
      observacion: {
        type: Sequelize.STRING
      },
      estado: {
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
    await queryInterface.dropTable('vs_ajustes');
  }
};