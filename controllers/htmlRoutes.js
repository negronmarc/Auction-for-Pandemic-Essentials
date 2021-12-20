const router = require("express").Router();
const { Product, User } = require("../models");

router.get("/product", async (req, res) => {
  const product = Product.findAll();
  res.render("product", product);
});

// router GET /login render the login page

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

//router GET /auction render the auction page whatever page has all the products
router.get("/products", async (req, res) => {
//  const dbProductData = await Product.findAll();
  const products = await Product.findAll();

  //const products = await dbProductData.get({ plain: true })
  res.render("products", { products });
});

//router GET /auction render a page with a single product
router.get("/auction/:id", async (req, res) => {
  try {
    const auctionData = await Product.findByPk(req.params.id)
    const product = await auctionData.get({ plain: true });
    console.log(product)

    res.render("auction", {
     product,
     logged_in: req.session.logged_in,
    }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
