var uniqid = require('uniqid');
var methodOverride = require('method-override');

const users = require('../usersData.json') || [];

module.exports = {
    getUserTemplate: (req, res, next) => {
        res.render('createUser');
        next();
    },
    createUser: (req, res, nex) => {
        const newUser = req.body;
        newUser.id = uniqid();
        users.push(newUser);
        res.redirect('/users');
        next();
    },
    getUserData: (req, res, next) => {
        const targetId = req.params.id;
        const targetedUser = users.find((user) => user.id === targetId);
        res.render('userProfile', {
            user: targetedUser,
        });
        next();
    },
    getUpdateUser: (req, res, next) => {
        const id = req.params.id;
        const user = users.find((user) => user.id === id);
        res.render('updateUser', { user });
        next();
    },
    updateUser: (req, res, next) => {
        const { id } = req.params;
        let foundUser = users.find((user) => user.id === id);
        console.log(foundUser, req.body);

        foundUser.email = req.body.email;
        foundUser.name = req.body.name;
        foundUser.age = parseInt(req.body.age);
        foundUser.city = req.body.city;
        res.redirect('/users');

        next();
    },
    deleteUser: (req, res, next) => {
        const { id } = req.params;
        let DeleteUser = users.find((user) => user.id === id);
        const deleteUserIndex = users.indexOf(DeleteUser);
        users.splice(deleteUserIndex, 1);

        res.redirect('/users');
    },
};
