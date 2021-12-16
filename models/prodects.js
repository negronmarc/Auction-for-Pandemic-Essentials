const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Products extends Model { }

Products.init(
  {
    product_name: {
      type: DataTypes.STRING
    },
    product_category_id: {
      type: DataTypes.INTEGER
    },
    product_specification: {
      type: DataTypes.STRING
    },
    actual_cost_in_currency: {
      type: DataTypes.INTEGER
    },


    sequelize,

    timestamps: false,
    underscored: true,
    modelName: 'products'
  }
);