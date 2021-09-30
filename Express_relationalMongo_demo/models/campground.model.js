const mongoose = require('mongoose');
const Review = require('../models/review');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String,
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const CampgroundSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    location: String,
    rating: Number,
    image: [ImageSchema],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
});

CampgroundSchema.post('findOneAndDelete', async function () {
    await Review.deleteMany({});
});

module.exports = mongoose.model('Campground', CampgroundSchema);
