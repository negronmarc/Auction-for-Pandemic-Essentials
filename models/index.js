const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");

User.hasMany(Product, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Product.belongsTo(User, {
  foreignKey: "user_id",
});

Category.hasMany(Product, {
  foreignKey: "product_id",
});

Product.belongsTo(Category,{
  foreignKey: "category_id",
})

module.exports = { User, Product, Category };
