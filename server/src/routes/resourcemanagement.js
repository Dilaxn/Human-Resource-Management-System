//////////////////////routes (resourceallocation.js)

const express = require('express');
const {
    add_resourceallocation,
    update_resourceallocation,
    get_all_resourceallocations,
    get_resourceallocation,
    delete_resourceallocation,
} = require('../controllers/resourcemanagement');
const router = new express.Router();


router.post('/api/addResource', add_resourceallocation);
router.delete('/api/deleteResource/:resource_id',  delete_resourceallocation);
router.patch('/api/updateResource/:resource_id',  update_resourceallocation);
router.get('/api/resource/:resource_id', get_resourceallocation);
router.get('/api/resources/', get_all_resourceallocations);


module.exports = router;
