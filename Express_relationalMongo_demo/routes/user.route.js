const User = require('../models/user');
const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');

router.get('/', (req, res) => {
    res.send('this is a user profile page');
});

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post(
    '/login',
    passport.authenticate('local', {
        failureFlash: true,
        failureRedirect: '/login',
    }),
    (req, res) => {
        req.flash('success', 'welcome to the travel note');
        const redirectUrl = req.session.returnTo || '/campgrounds';
        res.redirect(redirectUrl);
    }
);
router.get('/register', (req, res) => {
    res.render('user/register');
});
router.post('/register', async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const user = await new User({ username, email, phone });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, (err) => {
            if (err) return next(err);

            req.flash(
                'success',
                `the account created successfully, hello ${username}`
            );
            res.redirect('/campgrounds');
        });
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/register');
    }
});

router.get('/logout', async (req, res) => {
    req.logout();
    req.flash('success', 'good bye, see you soon!!');
    res.redirect('/login');
});

module.exports = router;
