//////////////////////routes (resourceallocation.js)

const express = require('express');
const {
    add_suggestion,
    update_suggestion,
    get_suggestion,
    get_all_suggestions,
    delete_suggestion,
} = require('../controllers/suggestion');
const router = new express.Router();


router.post('/api/addSuggestion', add_suggestion);
router.delete('/api/deleteSuggestion/:suggestion_id',  delete_suggestion);
router.patch('/api/updateSuggestion/:suggestion_id',  update_suggestion);
router.get('/api/suggestion/:suggestion_id', get_suggestion);
router.get('/api/suggestions/', get_all_suggestions);


module.exports = router;
