'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idsucursal: {
        type: Sequelize.INTEGER
      },
      idproveedor: {
        type: Sequelize.INTEGER
      },
      idordencompra: {
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      tip_comprobante: {
        type: Sequelize.STRING
      },
      ser_compronbante: {
        type: Sequelize.STRING
      },
      nro_factura: {
        type: Sequelize.INTEGER
      },
      observacion: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.INTEGER
      },
      totalexenta: {
        type: Sequelize.INTEGER
      },
      titaliva5: {
        type: Sequelize.INTEGER
      },
      totaliva10: {
        type: Sequelize.INTEGER
      },
      totalgrav10: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('compras');
  }
};