const express = require('express');
const app = express();
const path = require('path');

var uniqid = require('uniqid');
var methodOverride = require('method-override');

const port = 3000;
const usersRoute = require('./routes/user.route');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/users', usersRoute);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
