const mongoose = require('mongoose');
const Review = require('../models/review');

const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    location: String,
    rating: Number,
    imageUrl: String,
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
