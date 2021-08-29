const express = require('express');
const router = express.Router();

var uniqid = require('uniqid');
var methodOverride = require('method-override');

const users = require('../usersData.json') || [];
const usersController = require('../controllers/users.controller');

router.get('/', (req, res) => {
    res.render('index', { users });
});

//GET: create user template
router.get('/new', usersController.getUserTemplate);

//POST: Create new user
router.post('/new', usersController.createUser);

//GET: details for one specific user
router.get('/:id', usersController.getUserData);

//GET: update specific user form
router.get('/:id/edit', usersController.getUpdateUser);
// PATCH: update specific user
router.patch('/:id', usersController.updateUser);

//delete user

router.delete('/:id', usersController.deleteUser);

module.exports = router;
