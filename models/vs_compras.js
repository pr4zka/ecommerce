'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vs_compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vs_compras.init({
    sucursal: DataTypes.STRING,
    proveedor: DataTypes.STRING,
    fecha: DataTypes.DATEONLY,
    total: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vs_compras',
  });
  return vs_compras;
};