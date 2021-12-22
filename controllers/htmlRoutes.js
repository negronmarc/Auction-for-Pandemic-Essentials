const router = require("express").Router();
const { Product, User } = require("../models");

// redirect
router.get("/", (req, res) => {
  console.log("GET /");
  if (req.session.logged_in) {
    console.log("Redirecting to /products");
    res.redirect("/products");
  } else {
    console.log("Redirecting to /login");
    res.redirect("/login");
  }
});

router.get("/login", (req, res) => {
  console.log("GET /login");
  if (req.session.logged_in) {
    console.log("Redirecting to /products");
    res.redirect("/products");
    return;
  }

  res.render("login");
});

router.get("/products", async (req, res) => {
  console.log("GET /products");
  if (!req.session.logged_in) {
    console.log("redirecting /login");
    res.redirect("/login");
    return;
  }

  const dbProductData = await Product.findAll();

  const products = dbProductData.map((product) => product.get({ plain: true }));
  console.log("products: ", products);
  res.render("products", { products });
});

router.get("/auction/:id", async (req, res) => {
  try {
    const auctionData = await Product.findByPk(req.params.id);
    const product = await auctionData.get({ plain: true });
    console.log(product);

    res.render("auction", {
      product,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/auction/:id", async (req, res) => {
  try {
    const auctionData = await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      }
    );
    const product = await auctionData.json();

    res.render("auction", {
      product,
      logged_in: req.session.logged_in,
    }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
