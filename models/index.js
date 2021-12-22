const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");

Product.belongsTo(Category,{
  foreignKey: "category_id"
})


Product.belongsTo(User, {
  foreignKey: "current_bidder_id"
})

module.exports = { User, Product, Category };

