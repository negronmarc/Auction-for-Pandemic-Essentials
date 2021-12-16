const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Products extends Model { }

Products.init(
  {
    Id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Name:{
      type: DataTypes.VARCHAR,
      allowNull: false,
      autoIncrement: true,
    },
    Starting_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    Current_bid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    Description: {
      type: DataTypes.VARCHAR,
      allowNull: false,
      autoIncrement: true,
    },
    Image: {
      type: DataTypes.VARCHAR,
      allowNull: false,
      autoIncrement: true,
    },
    Bid_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    Category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    Current_bidder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },

    sequelize,

    timestamps: false,
    underscored: true,
    modelName: 'Products',
  }
);