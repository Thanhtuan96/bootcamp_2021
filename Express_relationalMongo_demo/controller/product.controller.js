const express = require('express');
const Product = require('../models/product');
const router = express.Router();

const Products = require('../models/product');
router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.render('products/show', { products });
});

router.get('/new', (req, res) => {
    res.render('products/create');
});
module.exports = router;
