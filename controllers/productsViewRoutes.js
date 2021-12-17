const router = require("express").Router(); 
const { Product } = require("../models");

router.get("/", (req, res) => {
    Product.findAll({
        where: {userId: req.session.userId}
    });
}).then (dbProductData => {
    const product = dbProductData.map((product) => product.get({plain:true}))
    res.render("product", {product})
});