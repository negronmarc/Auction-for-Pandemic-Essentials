const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Products extends Model { }

Products.init(
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_specification: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    actual_cost_in_currency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },


    sequelize,

    timestamps: false,
    underscored: true,
    modelName: 'Products'
  }
);