const Campground = require('../models/campground.model');
const Review = require('../models/review');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Joi = require('joi');
const passport = require('passport');
const averageRateCalculate = require('../middlewares/logicMiddleware');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocoder = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN });

module.exports = {
    //get all campground endpoint
    getAll: catchAsync(async (req, res, next) => {
        const camps = await Campground.find({}).populate('reviews');
        const mapboxToken = process.env.MAPBOX_TOKEN;

        camps.forEach((camp) => {
            camp.averageRate = averageRateCalculate(camp);
        });

        if (!camps) {
            throw new ExpressError('Product Not Found', 404);
        }
        res.render('campground/show', { camps, mapboxToken });
    }),
    //get one campground endpoint
    getOne: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const camp = await Campground.findById(id)
            .populate('reviews')
            .populate('author', 'username');
        camp.averageRate = averageRateCalculate(camp);
        if (!camp) {
            throw new ExpressError('Product Not Found', 404);
        }
        res.render('campground/details', { camp });
    }),
    // get create campground form
    getCreateForm: catchAsync(async (req, res, next) => {
        res.render('campground/create');
    }),
    //post new campground and create one in database
    postCreatedCamp: catchAsync(async (req, res, next) => {
        const geoData = await geocoder
            .forwardGeocode({
                query: req.body.campground.location,
                limit: 1,
            })
            .send();
        const campground = await Campground(req.body.campground);
        campground.images = req.files.map((f) => ({
            url: f.path,
            filename: f.filename,
        }));
        campground.author = req.user._id;
        campground.geometry = geoData.body.features[0].geometry;
        campground.save();
        res.redirect(`/campgrounds/${campground.id}`);
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
        const camp = await Campground.findByIdAndUpdate(id, {
            ...req.body.campground,
        });

        const imgs = req.files.map((f) => ({
            url: f.path,
            filename: f.filename,
        }));
        await camp.images.push(...imgs);
        await camp.save();
        req.flash('success', 'Successfully updated campground!');
        res.redirect(`/campgrounds/${camp._id}`);
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
