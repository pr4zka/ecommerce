'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShippingAdders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShippingAdders.init({
    adders: DataTypes.STRING,
    city: DataTypes.STRING,
    distric: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    isPaid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ShippingAdders',
  });
  return ShippingAdders;
};