const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Products extends Model {}

Products.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  starting_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  current_bid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  image: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  bid_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  current_bidder_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  sequelize,

  timestamps: false,
  underscored: true,
  modelName: "Products",
});

module.exports = Products;
