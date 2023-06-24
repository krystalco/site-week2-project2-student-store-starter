const express = require("express");
const router = express.Router();
const {getAllProducts, getProductById} = require("../model/store")
const storeModel = require("../model/store")

router.get("/", (req,res) => {
    const products = getAllProducts();
    res.json(products)
})

router.get("/:productId", (req, res) => {
    const { productId } = req.params;
    const product = getProductById(parseInt(productId));
    if (!product) {
        return res.status(404).json({message: "Product not found"});
    }
    res.json(product)
})


module.exports = router;