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

Categories.hasMany(Products, {
  foreignKey: "product_id",
});
Products.belongsTo(Categories,{
  foreignKey: "category_id"
})
module.exports = { User, Products, Categories };
