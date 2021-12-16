const router = require("express").Router(); 
const { Products } = require("../../models/Products")

router.post("/", async (req, res) => {
  try {
    const newProducts = await Products.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProducts);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;