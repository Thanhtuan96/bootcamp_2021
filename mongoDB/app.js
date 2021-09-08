const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const port = 3000;
const Product = require('./models/product.model');
const { urlencoded } = require('express');

mongoose
    .connect('mongodb://localhost:27017/YourTravel', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Mongo Database connected..!');
    })
    .catch((err) => {
        console.log(err);
    });

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // use this to read req.body
app.use(methodOverride('_method'));

// read all products from mongodb
app.get('/products', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.render('products/products', { products });
});
// get the create form
app.get('/products/new', (req, res) => {
    res.render('products/createProduct');
});

// post new product
app.post('/products', async (req, res) => {
    const newProduct = await new Product(req.body);
    await newProduct.save();
    res.redirect('/products');
});

// get details for one product
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/product', { product });
});


// get the update product by id form
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/updateProduct', { product });
});

// update the specific product
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    res.redirect(`/products/${product._id}`);
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.redirect('/products');
});

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
});
