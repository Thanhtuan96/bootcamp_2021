const express = require('express');
const router = express.Router();
const campgroundCRUD = require('../controllers/campgroundCRUD');
const campgroundValidate = require('../middlewares/campgroundValidate');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const multer = require('multer');
const { storage } = require('../cloudinary/index');
const upload = multer({ storage });

router
    .route('/')
    .get(campgroundCRUD.getAll) //get all campground data
    .post(
        isLoggedIn,
        upload.array('image'),
        campgroundValidate,
        campgroundCRUD.postCreatedCamp
    ); // POST: create a new camp
//GET: || render create form
router.get('/new', isLoggedIn, campgroundCRUD.getCreateForm);
router
    .route('/:id')
    .put(campgroundValidate, isLoggedIn, campgroundCRUD.putUpdate) // PUT: update selected camp
    .get(isLoggedIn, campgroundCRUD.getOne) // GET: get specific camp
    .delete(isLoggedIn, campgroundCRUD.deleteOne); //DELETE: delete camp

// GET: get camp edit form
router.get('/:id/edit', isLoggedIn, campgroundCRUD.getEditForm);

//POST: crate new review for camp
router.post('/:id/reviews', isLoggedIn, campgroundCRUD.createReview);

//DELETE: delete review in camp
router.delete(
    '/:id/reviews/:reviewId',

    campgroundCRUD.deleteReview
);

module.exports = router;
