const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        min: 0,
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy'],
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm',
    },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;