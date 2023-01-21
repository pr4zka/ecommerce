'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class libro_compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  libro_compra.init({
    idlibrocompra: DataTypes.INTEGER,
    idcompra: DataTypes.INTEGER,
    iva5: DataTypes.INTEGER,
    iva10: DataTypes.INTEGER,
    exenta: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'libro_compra',
  });
  return libro_compra;
};