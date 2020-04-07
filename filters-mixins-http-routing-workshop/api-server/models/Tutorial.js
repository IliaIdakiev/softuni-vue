const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const tutorialSchema = new Schema({

    technology: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },

    editor: {
        type: ObjectId,
        ref: 'User'
    }

});

module.exports = new Model('Tutorial', tutorialSchema);