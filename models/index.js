const User = require("./User");
const Products = require("./Products");
const Categories = require("./Categories");

User.hasMany(Products, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Products.belongsTo(User, {
  foreignKey: "user_id",
});

Categories.belongsTo(Products, {
  foreignKey: "product_id",
});

module.exports = { User, Products, Categories };
