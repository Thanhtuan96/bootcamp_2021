const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: Boolean,
    },
    price: {
        type: Number,
        require: Boolean,
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy'],
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
