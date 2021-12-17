const sequelize = require('../config/connection');
const { Category, Product, User } = require('../models');

const productData = require('./productData.json');
const categoryData = require('./categoryData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create a database or table for users   
  // Assign this return data to a const var users

  // Create a database table for category
  // Assign this return data to a const var Category

  // Loop through product data for each products 
  // For each product pick random user primary key and random category primary key
  // Assign it to foreign key user_id and category_id respectively 

  for (const product of productData) {
    await Product.create({
      ...product,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
