const mongoose = require('mongoose');
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
