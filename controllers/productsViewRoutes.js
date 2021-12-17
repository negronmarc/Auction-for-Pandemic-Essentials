const router = require("express").Router(); 
const { Products } = require("../models");

router.get("/", (req, res) => {
    Products.findAll({
        where: {userId: req.session.userId}
    });
}).then (dbProductData => {
    const products = dbProductData.map((product) => product.get({plain:true}))
    res.render("products", {products})
});