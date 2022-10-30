'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keyboards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Keyboards.init({
    disign: DataTypes.STRING,
    type: DataTypes.STRING,
    switch: DataTypes.STRING,
    ilumination: DataTypes.STRING,
    distribution: DataTypes.STRING,
    connection: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Keyboards',
  });
  return Keyboards;
};