const mongoose = require('mongoose');

const department_schema = new mongoose.Schema({

    depId: {
        type: Number,
        unique:true,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },

}, {
    timestamps: true
})



const Department  = mongoose.model("Department", department_schema);

module.exports = Department;