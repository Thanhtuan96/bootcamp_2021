require('dotenv').config();
const express = require('express');
const app = express();
const Database = require('./database');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');

const User = require('./models/user.model');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
const bcrypt = require('bcrypt');
// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// };
// const bcrypt = require('bcrypt');
// const hashPassword = async (pw) => {
//     const hash = await bcrypt.hash(pw, 10);
//     console.log(hash);
// };

// const login = async (pw, hashedPassword) => {
//     const result = await bcrypt.compare(pw, hashedPassword);
//     if (result) {
//         console.log('logginnnnnnn......');
//     } else {
//         console.log('password incorrect');
//     }
// };

// login('Monkey', '$2b$10$PeSD3sAQByb8Oer7sbS2ceQi3Z7GNoO42mSZFwCxYsWXzcp2zCbAK');

// hashPassword('Monkey');

const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(
    session({
        secret: 'thisshoulbbeagoodsecret',
        resave: false,
        saveUninitialized: false,
    })
);

const requireLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
};

app.get('/', requireLogin, (req, res) => {
    res.render('index');
});

//get login form
app.get('/login', (req, res) => {
    res.render('login/login');
});

// post login form
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        req.session.user_id = user._id;
        res.locals.user = user;
        res.redirect('/campgrounds');
    } else {
        res.redirect('/login');
    }
});
// get register form
app.get('/register', (req, res) => {
    res.render('login/register');
});

//post register form to create new User
app.post('/register', async (req, res) => {
    const { name, phone, email, password } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await new User({
        name,
        email,
        phone,
        password: hashpassword,
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
});

app.get('/campgrounds', (req, res) => {
    res.render('index');
});
app.get('/secret', (req, res) => {
    res.send(`this is a top secret`);
});

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.listen(port, () => {
    console.log(`listening on port: ${port}.....`);
});
