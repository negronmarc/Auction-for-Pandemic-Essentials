const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Bidders extends Model {}

Bidders.init(
  {
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    user_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    pwd_enc: {
        type: DataTypes.STRING
      },
    current_bid: {
        type: DataTypes.INTEGER
      },
  
   
    sequelize,
    
    timestamps: false,
    underscored: true,
    modelName: 'Bidders'
  }
);