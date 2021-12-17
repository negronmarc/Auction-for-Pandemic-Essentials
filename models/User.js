const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  email: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  password: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },

  sequelize,

  timestamps: false,
  underscored: true,
  modelName: "User",
});

module.exports = User;
