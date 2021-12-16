const router = require('express').Router();
const bidsRoutes = require('./bidsRoutes');
const biddersRoutes = require('./biddersRoutes');
const productsRoutes = require('./productsRoutes');
const catagoriesRoutes = require('./catagoriesRoutes');

const userRoutes = require('./userRoutes');

router.use('/bids', bidsRoutes);
router.use('/bidders', biddersRoutes);
router.use('/products', productsRoutes);
router.use('/user', userRoutes);

module.exports = router;

