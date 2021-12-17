const router = require("express").Router();
const productsViewRoutes = require("./productsViewRoutes");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/products", productsViewRoutes);
module.exports = router;
