const Campground = require('../models/campground.model');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Joi = require('joi');

module.exports = {
    getAll: catchAsync(async (req, res, next) => {
        const camps = await Campground.find({});
        if (!camps) {
            throw new ExpressError('Product Not Found', 404);
        }
        res.render('campground/campgrounds', { camps });
    }),
    getOne: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const camp = await Campground.findById(id);
        if (!camp) {
            throw new ExpressError('Product Not Found', 404);
        }
        res.render('campground/campground', { camp });
    }),
    getNewForm: catchAsync(async (req, res, next) => {
        res.render('campground/createCamp');
    }),
    postNew: catchAsync(async (req, res, next) => {
        const newCamp = await Campground(req.body);
        newCamp.save();
        res.redirect('/campgrounds');
    }),
    getEditForm: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const camp = await Campground.findById(id);
        if (!camp) throw new ExpressError('Product Not Found', 404);
        res.render('campground/editCamp', { camp });
    }),
    putUpdate: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        await Campground.findByIdAndUpdate(id, req.body);
        res.redirect('/campgrounds');
    }),
    deleteOne: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        console.log(id);
        await Campground.findByIdAndDelete(id);
        res.redirect('/campgrounds');
    }),
};
