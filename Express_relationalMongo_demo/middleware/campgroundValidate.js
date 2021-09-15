const Joi = require('joi');
const ExpressError = require('../utils/ExpressError');

const campgroundSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().min(0),
    rating: Joi.number().required(),
}).required();

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
