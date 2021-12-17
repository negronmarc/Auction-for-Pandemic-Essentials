const router = require("express").Router();
const productViewRoutes = require("./productsViewRoutes.js");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/product", productViewRoutes);
module.exports = router;
