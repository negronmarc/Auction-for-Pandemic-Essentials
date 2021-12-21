const router = require("express").Router();
const { Product, User } = require("../models");

// TODO: redirect
router.get("/", (req, res) => {
  console.log("GET /");
  if (req.session.logged_in) {
    console.log("Redirecting to /products");
    res.redirect("/products");
  }
  else {
    console.log("Redirecting to /login");
    res.redirect("/login");
  };
});

// router GET /login render the login page
router.get("/login", (req, res) => {
  console.log("GET /login");
  if (req.session.logged_in) {
    // TODO: route /profile needs to be created
    console.log("Redirecting to /products");
    res.redirect("/products");
    return;
  };

  res.render("login");
});

//router GET /auction render the auction page whatever page has all the products
router.get("/products", async (req, res) => {
  console.log("GET /products");
  if (!req.session.logged_in) {
    console.log('redirecting /login');
    res.redirect("/login");
    return;
  };
  
  const dbProductData = await Product.findAll();

  // TODO: .map() used to loop thru results (array) from database
  const products = dbProductData.map((product) =>
    product.get({ plain: true })
  );
  console.log('products: ', products);
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
