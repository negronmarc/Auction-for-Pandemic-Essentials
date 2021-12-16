const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Catagories extends Model { }

Catagories.init(
  {
    product_cat_type: {
      type: DataTypes.STRING
    },
    product_category_id: {
      type: DataTypes.INTEGER
    },
    product_specification: {
      type: DataTypes.STRING
    },


    sequelize,

    timestamps: false,
    underscored: true,
    modelName: 'Catagories'
  }
);