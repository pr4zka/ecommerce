'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  compras.init({
    idsucursal: DataTypes.INTEGER,
    idproveedor: DataTypes.INTEGER,
    idordencompra: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    tip_comprobante: DataTypes.STRING,
    ser_compronbante: DataTypes.STRING,
    nro_factura: DataTypes.INTEGER,
    observacion: DataTypes.STRING,
    total: DataTypes.INTEGER,
    totalexenta: DataTypes.INTEGER,
    titaliva5: DataTypes.INTEGER,
    totaliva10: DataTypes.INTEGER,
    totalgrav10: DataTypes.INTEGER,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'compras',
  });
  return compras;
};