const Joi = require('joi');
const ExpressError = require('../utils/ExpressError');

// Set Campground JOI Schema
const campgroundSchema = Joi.object({
    campground: Joi.object({
        title: Joi.string().required(),
        location: Joi.string().required(),
        // image: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required().min(0),
        rating: Joi.number().required(),
    }).required(),
});

// campground validate middleware
const campgroundValidate = (req, res, next) => {
    console.log(req.body);
    const { error } = campgroundSchema.validate(req.body);
    console.log(error);
    if (error) {
        const msg = error.details.map((el) => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
};

module.exports = campgroundValidate;
