const router = require("express").Router(); 
const { Product } = require("../models");

router.get("/products", async (req, res) => {
 const products = Product.findAll();
    res.render("products", products)
});


// router GET /login render the login page

//router GET /auction render the auction page whatever page has all the products

//router GET /singleproduct render a page with a single product

module.exports = router;