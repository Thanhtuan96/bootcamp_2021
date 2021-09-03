const mongoose = require('mongoose');

const Product = require('./models/product.model');

const mockProducts = require('./mockData.json');

console.log(mockProducts);

mongoose
    .connect('mongodb://localhost:27017/YourTravel', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Mongo Database connected..!');
    })
    .catch((err) => {
        console.log(err);
    });

Product.insertMany(mockProducts);
