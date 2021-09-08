const express = require('express');
const router = express.Router();
const Campground = require('../models/campground.model');

//GET: find one specific campground data || render create form
router.get('/new', async (req, res) => {
    res.render('campground/createCamp');
});

// GET: get specific camp
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findOne({ id });
    res.render('campground/campground', { camp });
});

//get all campground data
router.get('/', async (req, res) => {
    const camps = await Campground.find({});
    res.render('campground/campgrounds', { camps });
});

// POST: create a new camp
router.post('/', async (req, res) => {
    const newCamp = await Campground(req.body);
    newCamp.save();
    res.redirect('/campgrounds');
});

// GET: get camp edit form
router.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const foundCamp = await Campground.findById(id);
    res.render('campground/editCamp', { camp: foundCamp });
});

// PUT: update selected camp
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updateCamp = await Campground.findByIdAndUpdate(id, req.body);
    res.redirect('/campgrounds');
});

//DELETE: delete camp
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndRemove(id);
    res.redirect('/campgrounds');
});

// create initial campground
// router.get('/makecamp', async (req, res) => {
//     const camp = await new Campground({
//         title: 'My backyard',
//         description: 'this is a beautiful place',
//         price: '5',
//         location: 'Japan',
//     });
//     await camp.save();
//     res.send(camp);
// });

module.exports = router;
