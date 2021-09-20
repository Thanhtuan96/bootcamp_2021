const { string } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    create_at: String,
    body: String,
    rating: Number,
});

module.exports = mongoose.model('Review', reviewSchema);
