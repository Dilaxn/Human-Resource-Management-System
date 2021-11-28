/////////////////////////models (resourceallocation.js)

const mongoose = require('mongoose');

const resourceallocation_schema = new mongoose.Schema({

    productname: {
        type: String,
        required: true,
    },
    totalproducts: {
        type: Integer,
        required: true,

    },
    productcondition: {
        type: String,
        required: true,
        
    },

}, {
    timestamps: true
})



const ResourceAllocation  = mongoose.model("ResourceAllocation", resourceallocation_schema);

module.exports = ResourceAllocation;