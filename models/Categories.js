const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Categories extends Model {}

Categories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      //changed integer to string
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,

    timestamps: false,
    underscored: true,
    modelName: "Categories",
  }
);

module.exports = Categories;
