const express = require('express');
const router = express.Router();
const campgroundCRUD = require('../controllers/campgroundCRUD');
const campgroundValidate = require('../middlewares/campgroundValidate');
const { isLoggedIn } = require('../middlewares/isLoggedIn');

router
    .route('/')
    .get(campgroundCRUD.getAll) //get all campground data
    .post(isLoggedIn, campgroundValidate, campgroundCRUD.postNew); // POST: create a new camp

//GET: || render create form
router.get('/new', isLoggedIn, campgroundCRUD.getNewForm);

// GET: get camp edit form
router.get('/:id/edit', isLoggedIn, campgroundCRUD.getEditForm);

router
    .route('/:id')
    .put(isLoggedIn, campgroundValidate, campgroundCRUD.putUpdate) // PUT: update selected camp
    .get(isLoggedIn, campgroundCRUD.getOne) // GET: get specific camp
    .delete(isLoggedIn, campgroundCRUD.deleteOne); //DELETE: delete camp

//POST: crate new review for camp
router.post('/:id/reviews', isLoggedIn, campgroundCRUD.createReview);

//DELETE: delete review in camp
router.delete(
    '/:id/reviews/:reviewId',
    isLoggedIn,
    campgroundCRUD.deleteReview
);

module.exports = router;
