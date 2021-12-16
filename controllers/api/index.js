const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const productsRoutes = require('./productsRoutes');
const categoriesRoutes = require('./categoriesRoutes');

router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;

