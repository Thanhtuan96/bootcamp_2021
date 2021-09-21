const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
});

module.exports = mongoose.model('User', userSchema);
