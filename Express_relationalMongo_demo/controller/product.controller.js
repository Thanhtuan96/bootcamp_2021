const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('products page...');
});

router.get('/new', (req, res) => {
    res.render('products/create');
});
module.exports = router;
