require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require('method-override');

const campgroundController = require('./controller/campground.controller');
const Database = require('./database');

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/campgrounds', campgroundController);

// GET: get main page
app.get('/', async (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Listening from ${port}`);
});
