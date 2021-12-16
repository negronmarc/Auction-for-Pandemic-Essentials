const sequelize = require('../config/connection');
const { Product } = require('../models');


const productData = require('./productData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });


  for (const product of productData) {
    await Product.create({
      ...product,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
