const router = require("express").Router(); 
const { Product } = require("../models");

router.get("/product", async (req, res) => {
 const product = Product.findAll();
    res.render("product", product)
});


// router GET /login render the login page

//router GET /auction render the auction page whatever page has all the products

//router GET /singleproduct render a page with a single product

module.exports = router;