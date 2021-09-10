const express = require('express');
const router = express.Router();
const campgroundCRUD = require('../middleware/campgroundCRUD');

//get all campground data
router.get('/', campgroundCRUD.getAll);

// POST: create a new camp
router.post('/', campgroundCRUD.postNew);
//GET: || render create form
router.get('/new', campgroundCRUD.getNewForm);

// GET: get camp edit form
router.get('/:id/edit', campgroundCRUD.getEditForm);

// PUT: update selected camp
router.put('/:id', campgroundCRUD.putUpdate);
// GET: get specific camp
router.get('/:id', campgroundCRUD.getOne);

//DELETE: delete camp
router.delete('/:id', campgroundCRUD.deleteOne);

module.exports = router;
