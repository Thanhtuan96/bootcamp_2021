const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/YourTravel', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database connected..!');
    })
    .catch((err) => {
        console.log(err);
    });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.on('open', function () {
//     console.log('database connected...!');
// });

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    city: String,
});

const User = mongoose.model('User', userSchema);

const productSchema = new mongoose.Schema({
    name: String,
    onSale: Boolean,
    qty: Number,
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({
    name: 'Mountain',
    onSale: true,
    qty: 2,
});

User.find({})
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// const Tuan = new User({
//     name: 'Tuan',
//     age: 25,
//     email: 'thanhtuan220315@gmail.com',
//     city: 'Ha Noi',
// }).save();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
});
