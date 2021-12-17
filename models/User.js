const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Users extends Model { }

Users.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Username: {
            type: DataTypes.VARCHAR,
            allowNull: false,
            autoIncrement: true,
        },
        Email: {
            type: DataTypes.VARCHAR,
            allowNull: false,
            autoIncrement: true,
        },
        Password: {
            type: DataTypes.VARCHAR,
            allowNull: false,
            autoIncrement: true,
        },



        sequelize,

        timestamps: false,
        underscored: true,
        modelName: 'Users'
    }
);