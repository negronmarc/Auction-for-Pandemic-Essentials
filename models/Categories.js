const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Catagories extends Model { }

Catagories.init(
    {
        Id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Category:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },

        sequelize,

        timestamps: false,
        underscored: true,
        modelName: 'Catagories'
    }
);