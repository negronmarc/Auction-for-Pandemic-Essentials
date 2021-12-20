const router = require("express").Router();
const { Product, User } = require("../models");

router.get("/product", async (req, res) => {
  const product = Product.findAll();
  res.render("product", product);
});

// router GET /login render the login page

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

//router GET /auction render the auction page whatever page has all the products
router
  .get("/products", (req, res) => {
    Product.findAll({
      where: { userId: req.session.userId },
    });
  })
  .then((dbProductData) => {
    const products = dbProductData.map((product) =>
      product.get({ plain: true })
    );
    res.render("products", { products });
  });
module.exports = router;

//router GET /singleproduct render a page with a single product
router.get("/singleproduct/:id", async (req, res) => {
  try {
    const auctionData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const auction = auctionData.get({ plain: true });

    res.render("auction", {
      ...auction,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
