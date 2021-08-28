const express = require('express');
var uniqid = require('uniqid');
const path = require('path');
const app = express();

const users = require('./usersData.json');

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/users', (req, res) => {
    res.render('index', { users });
});

app.get('/users/new', (req, res) => {
    res.render('createUser');
});

app.post('/users/new', (req, res) => {
    const newUser = req.body;
    user.id = uniqid();
    users.push(newUser);
    res.redirect('/users');
});

app.get('/users/:id', (req, res) => {
    const targetId = req.params.id;
    const targetedUser = users.find((user) => (user.id = targetId));
    res.render('userProfile', {
        user: targetedUser,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
