const express = require('express');
const router = express.Router();
const campgroundCRUD = require('../controllers/campgroundCRUD');
const campgroundValidate = require('../middlewares/campgroundValidate');
const { isLoggedIn } = require('../middlewares/isLoggedIn');

//get all campground data
router.get('/', campgroundCRUD.getAll);

// POST: create a new camp
router.post('/', isLoggedIn, campgroundValidate, campgroundCRUD.postNew);

//GET: || render create form
router.get('/new', isLoggedIn, campgroundCRUD.getNewForm);

// GET: get camp edit form
router.get('/:id/edit', isLoggedIn, campgroundCRUD.getEditForm);

// PUT: update selected camp
router.put('/:id', isLoggedIn, campgroundValidate, campgroundCRUD.putUpdate);
// GET: get specific camp
router.get('/:id', isLoggedIn, campgroundCRUD.getOne);

//DELETE: delete camp
router.delete('/:id', isLoggedIn, campgroundCRUD.deleteOne);

//POST: crate new review for camp
router.post('/:id/reviews', isLoggedIn, campgroundCRUD.createReview);

//DELETE: delete review in camp
router.delete(
    '/:id/reviews/:reviewId',
    isLoggedIn,
    campgroundCRUD.deleteReview
);

module.exports = router;
