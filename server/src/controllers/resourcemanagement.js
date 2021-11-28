///////////// controllers (resourceallocation.js)
const ResourceAllocation = require('../models/resourceallocation');

const get_all_resourceallocations = async (req, res) => {
try {
const all_resourceallocations = await ResourceAllocation.find({});
res.status(200).send(all_resourceallocations);
} catch (error) {
res.status(500).send(error.message);
}
}

const get_resourceallocation = async (req, res) => {
try {
const resourceallocation = await ResourceAllocation.findById(req.params.resourceallocation_id).select('-__v');

if (!resourceallocation) {
res.status(404).send({message: 'not found'});
return;
}

const final = resourceallocation.toObject();
delete final.id;
res.send(final);
} catch (e) {
res.status(500).send(e);
}
}

const add_resourceallocation = async (req, res) => {
try {
console.log(req.body)
if ( !req.body.productname || !req.body.totalproducts || !req.body.productcondition)  {
throw new Error('Empty Parameters');
}


const resourceallocation = new ResourceAllocation({
...req.body
});

await resourceallocation.save();
res.status(201).send(resourceallocation);

} catch (e) {
res.status(500).send(e.message);
}
}

const delete_resourceallocation = async (req, res) => {
let  resourceallocation_id = req.params.resourceallocation_id

try {
const resourceallocation = await ResourceAllocation.findOneAndDelete({_id: resourceallocation_id}).select('-__v');
if (!resourceallocation) {
res.status('400').send({message: 'could not delete'});
return;
}
const final = resourceallocation.toObject();
delete final.id;
res.send(final);

} catch (e) {
res.status(500).send(e);
}
}


const update_resourceallocation = async (req, res) => {
const updates = Object.keys(req.body);
try {
const resourceallocation = await ResourceAllocation.findById(req.params.resourceallocation_id).select('-__v');
console.log(resourceallocation)
if (!resourceallocation) {
res.status(404).send({message: 'not found'});
return;
}

await updates.forEach((update) => {
resourceallocation[update] = req.body[update];
});

await resourceallocation.save();
res.send(resourceallocation);
} catch (e) {
res.status(500).send(e);
}
}

module.exports = {
get_resourceallocation,
get_all_resourceallocations,
delete_resourceallocation,
update_resourceallocation,
add_resourceallocation
}
