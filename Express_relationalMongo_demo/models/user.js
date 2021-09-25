const mongoose = require('mongoose');
const { Schema } = mongoose;
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    password: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
