'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proveedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  proveedores.init({
    idproveedor: DataTypes.STRING,
    idpais: DataTypes.STRING,
    idciudad: DataTypes.STRING,
    razonsocial: DataTypes.STRING,
    ruc: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'proveedores',
  });
  return proveedores;
};