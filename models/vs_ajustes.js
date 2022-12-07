'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vs_ajustes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vs_ajustes.init({
    idsucursal: DataTypes.INTEGER,
    sucursal: DataTypes.STRING,
    tipoajuste: DataTypes.STRING,
    observacion: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vs_ajustes',
  });
  return vs_ajustes;
};