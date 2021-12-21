const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");

const productData = require("./productData.json");
const categoryData = require("./categoryData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create a database or table for users
  // Assign this return data to a const var users

  // TODO: bulkCreate
  const dbUsers = await User.bulkCreate(userData, {
    individualHooks: true // to invoke hooks to encrypt password
  });

  // for (user of userData) {
  //   await User.create(user);
  // }

  // Create a database table for category
  // Assign this return data to a const var Category

  // TODO: bulkCreate
  const dbCategories = await Category.bulkCreate(categoryData);

  // for (category of categoryData) {
  //   await Category.create(category);
  // }

  // Loop through product data for each products
  // For each product pick random user primary key and random category primary key
  // Assign it to foreign key user_id and category_id respectively

  // TODO: bulkCreate
  const dbProducts = await Product.bulkCreate(productData);

  // for (product of productData) {
  //   await Product.create(product);
  // }

  process.exit(0);
};

seedDatabase();

