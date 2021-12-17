const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Catagories extends Model {}

Catagories.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
  sequelize,

  timestamps: false,
  underscored: true,
  modelName: "Categories",
});

module.exports = Categories;
