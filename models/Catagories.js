const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Catagories extends Model { }

Catagories.init(
    {
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
        modelName: 'Catagories'
    }
);