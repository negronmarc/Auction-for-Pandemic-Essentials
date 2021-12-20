const router = require("express").Router();
const { Product } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll();

    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
