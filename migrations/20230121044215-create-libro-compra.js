'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('libro_compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idlibrocompra: {
        type: Sequelize.INTEGER
      },
      idcompra: {
        type: Sequelize.INTEGER
      },
      iva5: {
        type: Sequelize.INTEGER
      },
      iva10: {
        type: Sequelize.INTEGER
      },
      exenta: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('libro_compras');
  }
};