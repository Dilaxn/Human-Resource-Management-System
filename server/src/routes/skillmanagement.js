const express = require('express');
const {
add_skillmanagement,
update_skillmanagement,
get_skillmanagement,
get_all_skillmanagements,
delete_skillmanagement,
} = require('../controllers/skillmanagement');
const router = new express.Router();


router.post('/api/addSkillManagement', add_skillmanagement);
router.delete('/api/deleteSkillManagement/:skillmanagement_id',  delete_skillmanagement);
router.patch('/api/updateSkillManagement/:skillmanagement_id',  update_skillmanagement);
router.get('/api/skillmanagement/:skillmanagement_id', get_skillmanagement);
router.get('/api/skillmanagements/', get_all_skillmanagements);


module.exports = router;