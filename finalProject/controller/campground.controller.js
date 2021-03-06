const express = require('express');
const router = express.Router();
const campgroundCRUD = require('../middleware/campgroundCRUD');
const campgroundValidate = require('../middleware/campgroundValidate');

//get all campground data
router.get('/', campgroundCRUD.getAll);

// POST: create a new camp
router.post('/', campgroundValidate, campgroundCRUD.postNew);

//GET: || render create form
router.get('/new', campgroundCRUD.getNewForm);

// GET: get camp edit form
router.get('/:id/edit', campgroundCRUD.getEditForm);

// PUT: update selected camp
router.put('/:id', campgroundValidate, campgroundCRUD.putUpdate);
// GET: get specific camp
router.get('/:id', campgroundCRUD.getOne);

//DELETE: delete camp
router.delete('/:id', campgroundCRUD.deleteOne);

module.exports = router;
