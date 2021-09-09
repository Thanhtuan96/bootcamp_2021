const Campground = require('../models/campground.model');
module.exports = {
    getAll: async (req, res, next) => {
        const camps = await Campground.find({});
        res.render('campground/campgrounds', { camps });
    },
    getOne: async (req, res, next) => {
        const { id } = req.params;
        const camp = await Campground.findOne({ id });
        res.render('campground/campground', { camp });
    },
    getNewForm: async (req, res, next) => {
        res.render('campground/createCamp');
    },
    postNew: async (req, res, next) => {
        const newCamp = await Campground(req.body);
        newCamp.save();
        res.redirect('/campgrounds');
    },
    getEditForm: async (req, res, next) => {
        const { id } = req.params;
        const foundCamp = await Campground.findById(id);
        res.render('campground/editCamp', { camp: foundCamp });
    },
    putUpdate: async (req, res, next) => {
        const { id } = req.params;
        const updateCamp = await Campground.findByIdAndUpdate(id, req.body);
        res.redirect('/campgrounds');
    },
    deleteOne: async (req, res, next) => {
        const { id } = req.params;
        await Campground.findByIdAndRemove(id);
        res.redirect('/campgrounds');
    },
};
