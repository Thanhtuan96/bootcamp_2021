const Campground = require('../models/campground.model');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

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
        const camp = await Campground.findById({ id });
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
        const foundCamp = await Campground.findById(id);
        {
            if (!foundCamp) throw new ExpressError('Product Not Found', 404);
        }
        res.render('campground/editCamp', { camp: foundCamp });
    }),
    putUpdate: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const updateCamp = await Campground.findByIdAndUpdate(id, req.body);
        res.redirect('/campgrounds', {
            success: `${updateCamp.title} is updated`,
        });
    }),
    deleteOne: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        await Campground.findByIdAndRemove(id);
        res.redirect('/campgrounds');
    }),
};
