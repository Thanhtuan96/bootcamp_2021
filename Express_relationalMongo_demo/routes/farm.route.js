const express = require('express');
const router = express.Router();
const Farm = require('../models/farm');
const Product = require('../models/product');

const categories = ['fruit', 'Drink', 'Dairy'];

router.get('/', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farm/show', { farms });
});

router.get('/new', async (req, res) => {
    res.render('farm/create');
});

router.post('/', async (req, res) => {
    const farm = await new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id).populate('products');
    console.log(farm);
    res.render('farm/details', { farm });
});

router.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    res.render('farm/edit', { farm });
});

router.get('/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/create', { id, categories });
});

router.post('/:id/products', async (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const farm = await Farm.findById(id);
    const product = await new Product({ name, price, category });
    product.farm = farm;
    farm.products.push(product);
    await farm.save();
    await product.save();
    res.send(farm);
});

module.exports = router;
