const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
    name: {
        type: String,
        require: [true, 'Username cannot be blank'],
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
    },
    password: String,
    phone: Number,
});

module.exports = mongoose.model('User', userSchema);
