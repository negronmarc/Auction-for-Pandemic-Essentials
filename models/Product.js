const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_bid: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bid_count: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;