const express = require('express');
var uniqid = require('uniqid');
var methodOverride = require('method-override');
const path = require('path');
const app = express();

const users = require('./usersData.json');
const { get } = require('http');

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//GET: get index page
app.get('/users', (req, res) => {
    res.render('index', { users });
});

//GET: create user template
app.get('/users/new', (req, res) => {
    res.render('createUser');
});

//POST: Create new user
app.post('/users/new', (req, res) => {
    const newUser = req.body;
    user.id = uniqid();
    users.push(newUser);
    res.redirect('/users');
});

//GET: details for one specific user
app.get('/users/:id', (req, res) => {
    const targetId = req.params.id;
    const targetedUser = users.find((user) => user.id === targetId);
    res.render('userProfile', {
        user: targetedUser,
    });
});

//GET: update specific user form
app.get('/users/:id/edit', (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);
    res.render('updateUser', { user });
});

app.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    let foundUser = users.find((user) => user.id === id);

    console.log(foundUser, req.body);

    foundUser.email = req.body.email;
    foundUser.name = req.body.name;
    foundUser.age = parseInt(req.body.age);
    foundUser.text = req.body.text;
    res.redirect('/users');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
