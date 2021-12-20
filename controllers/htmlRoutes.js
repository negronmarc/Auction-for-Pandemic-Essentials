const router = require("express").Router();
const { Product, User } = require("../models");

// root routes GET /

// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const projectData = await Project.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const projects = projectData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       projects, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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
  console.log("GET /products");
  const dbProductData = await Product.findAll();
  console.log(dbProductData);

  // const products = await dbProductData.get({ plain: true });
  // console.log(products);
  res.render("products", { products });
});

//router GET /auction render a page with a single product
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

module.exports = router;
