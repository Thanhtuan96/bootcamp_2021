const { number } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
    name: {
        type: String,
        require: [true, 'user name should be enter'],
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    password: String,
});
