const router = require("express").Router(); 
const Bids = require("../../models/bids")

router.post("/", async (req, res) => {
  try {
    const newBids = await Bids.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBids);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
