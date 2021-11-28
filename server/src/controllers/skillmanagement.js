const SkillManagement = require('../models/skillmanagement');

const get_all_skillmanagements = async (req, res) => {
try {
const all_skillmanagements = await SkillManagement.find({});
res.status(200).send(all_skillmanagements);
} catch (error) {
res.status(500).send(error.message);
}
}

const get_skillmanagement = async (req, res) => {
try {
const skillmanagement = await SkillManagement.findById(req.params.skillmanagement_id).select('-__v');

if (!skillmanagement) {
res.status(404).send({message: 'not found'});
return;
}

const final = skillmanagement.toObject();
delete final.id;
res.send(final);
} catch (e) {
res.status(500).send(e);
}
}

const add_skillmanagement = async (req, res) => {
try {
console.log(req.body)
if ( !req.body.employeeName ||!req.body.employeeID || !req.body.employeeRoll || !req.body.skills || !req.body.projects) {
throw new Error('Empty Parameters');
}


const skillmanagement = new SkillManagement({
...req.body
});

await skillmanagement.save();
res.status(201).send(skillmanagement);

} catch (e) {
res.status(500).send(e.message);
}
}

const delete_skillmanagement = async (req, res) => {
let  skillmanagement_id = req.params.skillmanagement_id

try {
const skillmanagement = await SkillManagement.findOneAndDelete({_id: skillmanagement_id}).select('-__v');
if (!skillmanagement) {
res.status('400').send({message: 'could not delete'});
return;
}
const final = skillmanagement.toObject();
delete final.id;
res.send(final);

} catch (e) {
res.status(500).send(e);
}
}


const update_skillmanagement = async (req, res) => {
const updates = Object.keys(req.body);
try {
const skillmanagement = await SkillManagement.findById(req.params.skillmanagement_id).select('-__v');
console.log(skillmanagement)
if (!skillmanagement) {
res.status(404).send({message: 'not found'});
return;
}

await updates.forEach((update) => {
skillmanagement[update] = req.body[update];
});

await skillmanagement.save();
res.send(skillmanagement);
} catch (e) {
res.status(500).send(e);
}
}

module.exports = {
get_skillmanagement,
get_all_skillmanagements,
delete_skillmanagement,
update_skillmanagement,
add_skillmanagement
}