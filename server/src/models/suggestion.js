const mongoose = require('mongoose');

const suggestion_schema = new mongoose.Schema({

    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },

}, {
    timestamps: true
})



const Suggestion  = mongoose.model("Suggestion", suggestion_schema);

module.exports = Suggestion;