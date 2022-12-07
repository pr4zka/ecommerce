'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nacionalidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nacionalidades.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nacionalidades',
  });
  return nacionalidades;
};