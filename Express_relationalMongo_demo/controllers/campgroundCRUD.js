const Campground = require('../models/campground.model');
const Review = require('../models/review');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Joi = require('joi');
const passport = require('passport');

module.exports = {
    //get all campground endpoint
    getAll: catchAsync(async (req, res, next) => {
        const camps = await Campground.find({}).populate('reviews');
        if (!camps) {
            throw new ExpressError('Product Not Found', 404);
        }
        res.render('campground/show', { camps });
    }),
    //get one campground endpoint
    getOne: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const camp = await Campground.findById(id).populate('reviews');
        if (!camp) {
            throw new ExpressError('Product Not Found', 404);
        }
        res.render('campground/details', { camp });
    }),
    // get create campground form
    getNewForm: catchAsync(async (req, res, next) => {
        res.render('campground/create');
    }),
    //post new campground and create one in database
    postNew: catchAsync(async (req, res, next) => {
        const newCamp = await Campground(req.body);
        newCamp.save();
        res.redirect('/campgrounds');
    }),
    // get Edit campground form
    getEditForm: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const camp = await Campground.findById(id);
        if (!camp) throw new ExpressError('Product Not Found', 404);
        res.render('campground/edit', { camp });
    }),
    // put the update of campground and update database
    putUpdate: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        await Campground.findByIdAndUpdate(id, req.body);
        res.redirect('/campgrounds');
    }),
    // delete one campground
    deleteOne: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        await Campground.findByIdAndDelete(id);
        res.redirect('/campgrounds');
    }),

    createReview: catchAsync(async (req, res, next) => {
        const create_at = new Date();
        const review = await new Review({ ...req.body, create_at });
        const campground = await Campground.findById(req.params.id);
        await campground.reviews.push(review);
        await review.save();
        await campground.save();
        res.redirect('/campgrounds/' + campground._id);
    }),
    deleteReview: catchAsync(async (req, res, next) => {
        const { id, reviewId } = req.params;
        await Campground.findByIdAndUpdate(id, {
            $pull: { reviews: reviewId },
        });
        await Review.findByIdAndDelete(reviewId);
        res.redirect(`/campgrounds/${id}`);
    }),
};
