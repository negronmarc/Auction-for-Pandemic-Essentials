const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");

const productData = require("./productData.json");
const categoryData = require("./categoryData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const dbUsers = await User.bulkCreate(userData, {
    individualHooks: true
  });

  const dbCategories = await Category.bulkCreate(categoryData);

  const dbProducts = await Product.bulkCreate(productData);

  process.exit(0);
};

seedDatabase();

