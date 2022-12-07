'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mercaderias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mercaderias.belongsTo(models.marcas, {
        foreignKey: 'idmarca'
      });
      mercaderias.belongsTo(models.tipo_impuesto, {
        foreignKey: 'idtipoimpuesto'
      });
    }
  }
  mercaderias.init({
    idmarca: DataTypes.INTEGER,
    idtipoimpuesto: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    preciocompra: DataTypes.INTEGER,
    precioventa: DataTypes.INTEGER,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mercaderias',
  });
  return mercaderias;
};