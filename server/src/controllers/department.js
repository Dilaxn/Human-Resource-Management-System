const Department = require('../models/department');

const get_all_departments = async (req, res) => {
    try {
        const all_departments = await Department.find({});
        res.status(200).send(all_departments);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const get_department = async (req, res) => {
    try {
        const department = await Department.findById(req.params.dep_id).select('-__v');

        if (!department) {
            res.status(404).send({message: 'not found'});
            return;
        }

        const final = department.toObject();
        delete final.id;
        res.send(final);
    } catch (e) {
        res.status(500).send(e);
    }
}

const add_department = async (req, res) => {
    try {
        console.log(req.body)
        if ( !req.body.depId || !req.body.name) {
            throw new Error('Empty Parameters');
        }


        const department = new Department({
            ...req.body
        });

        await department.save();
        res.status(201).send(department);

    } catch (e) {
        res.status(500).send(e.message);
    }
}

const delete_department = async (req,res)=>{
    try{
        const removePost = await Department.findByIdAndDelete({_id:req.params.dep_Id});
        res.json(removePost); 
    }
    catch(err){
        res.json({message: err})
    }
}


const update_department = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const department = await Department.findById(req.params.dep_id).select('-__v');
        console.log(department)
        if (!department) {
            res.status(404).send({message: 'not found'});
            return;
        }

        await updates.forEach((update) => {
            department[update] = req.body[update];
        });

        await department.save();
        res.send(department);
    } catch (e) {
        res.status(500).send(e);
    }
}




module.exports = {
    get_department,
    get_all_departments,
    delete_department,
    update_department,
    add_department
}