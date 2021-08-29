const express = require('express');
const app = express();
const router = express.Router();
var uniqid = require('uniqid');
var methodOverride = require('method-override');
const users = require('../usersData.json') || [];

router.get('/', (req, res) => {
    res.render('index', { users });
});

//GET: create user template
router.get('/new', (req, res) => {
    res.render('createUser');
});

//POST: Create new user
router.post('/new', (req, res) => {
    const newUser = req.body;
    newUser.id = uniqid();
    users.push(newUser);
    res.redirect('/users');
});

//GET: details for one specific user
router.get('/:id', (req, res) => {
    const targetId = req.params.id;
    const targetedUser = users.find((user) => user.id === targetId);
    res.render('userProfile', {
        user: targetedUser,
    });
});

//GET: update specific user form
router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);
    res.render('updateUser', { user });
});
// PATCH: update specific user
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    let foundUser = users.find((user) => user.id === id);
    console.log(foundUser, req.body);

    foundUser.email = req.body.email;
    foundUser.name = req.body.name;
    foundUser.age = parseInt(req.body.age);
    foundUser.city = req.body.city;
    res.redirect('/users');
});

//delete user

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let DeleteUser = users.find((user) => user.id === id);
    const deleteUserIndex = users.indexOf(DeleteUser);
    users.splice(deleteUserIndex, 1);

    res.redirect('/users');
    // res.redirect('/users', { users: users.slice(deleteUserIndex, 1) });
});

module.exports = router;
