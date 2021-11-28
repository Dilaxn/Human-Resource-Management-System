const mongoose = require('mongoose');

const skillmanagement_schema = new mongoose.Schema({

    employeeName: {
        type: String,
        required: true,
    },
    employeeID: {
        type: String,
        required: true,
    },
    employeeRoll: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    projects: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
})



const SkillManagement  = mongoose.model("SkillManagement", skillmanagement_schema);

module.exports = SkillManagement;
