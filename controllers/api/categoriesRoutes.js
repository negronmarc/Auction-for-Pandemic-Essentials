const router = require("express").Router(); 
const { Categories } = require("../../models/categories")

router.post("/", async (req, res) => {
  try {
    const newCategories = await Categories.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCategories);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;