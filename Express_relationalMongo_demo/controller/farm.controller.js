const express = require('express');
const router = express.Router();
const Farm = require('../models/farm');
const { route } = require('./campground.controller');

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
    const farm = await Farm.findById(id);
    res.render('farm/details', { farm });
});

router.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('farm/edit', { farm });
});

module.exports = router;
