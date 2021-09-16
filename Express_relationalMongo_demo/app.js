require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require('method-override');
const morgan = require('morgan');

const campgroundController = require('./controller/campground.controller');
const ProductController = require('./controller/product.controller');
const FarmController = require('./controller/farm.controller');
const ExpressError = require('./utils/ExpressError');
const Database = require('./database');

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('tiny'));

app.use('/campgrounds', campgroundController);
app.use('/products', ProductController);
app.use('/farms', FarmController);
// GET: get main page
app.get('/', async (req, res) => {
    res.render('home');
});

// handle page not found
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    console.log(err);
    if (!err.message) {
        err.message = 'Oh no somthing go wrong';
    }
    console.dir(err);
    res.status(statusCode).render('error', { err });
});
app.listen(port, () => {
    console.log(`Listening from ${port}`);
});
