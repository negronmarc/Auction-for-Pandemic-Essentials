const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Categories extends Model {}

Categories.init({
  product_cat_type: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_specification: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  sequelize,

  timestamps: false,
  underscored: true,
  modelName: "Categories",
});

module.exports = Categories;