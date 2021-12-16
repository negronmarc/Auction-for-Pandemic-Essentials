const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class BidOrder extends Model { }

BidOrder.init(
    {
        product_id: {
            type: DataTypes.STRING
        },
        users_bidding: {
            type: DataTypes.STRING
        },
        user_name: {
            type: DataTypes.STRING
        },
        increment_in_price_per_bid: {
            type: DataTypes.INTEGER
        },
        bid_price: {
            type: DataTypes.INTEGER
        },
        bids: {
            type: DataTypes.INTEGER
        },
        bids_limit: {
            type: DataTypes.INTEGER
        },



        sequelize,

        timestamps: false,
        underscored: true,
        modelName: 'biders'
    }
);