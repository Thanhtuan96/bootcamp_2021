require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const passport = require('passport');

const campgroundRoute = require('./routes/campground.route');
const ProductRoute = require('./routes/product.route');
const FarmRoute = require('./routes/farm.route');
const UserRoute = require('./routes/user.route');
const ExpressError = require('./utils/ExpressError');
const Database = require('./database');
const User = require('./models/user');

const port = process.env.PORT || 3000;
const sessionConfig = {
    secret: 'thisshouldbescret',
    resave: true,
    saveUninitialized: true,
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session(sessionConfig));
app.use(morgan('tiny'));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.env = process.env;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/campgrounds', campgroundRoute);
app.use('/products', ProductRoute);
app.use('/farms', FarmRoute);
app.use('/', UserRoute);

// GET: get main page
app.get('/home', async (req, res) => {
    req.flash('success', 'Welcome back');
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
    res.status(statusCode).render('error', { err });
});
app.listen(port, () => {
    console.log(`Listening from ${port}`);
});
