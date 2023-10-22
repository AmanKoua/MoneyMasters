const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({

    points: {
        type: Number,
        required: true,
        unique: false,
    },
    badges: {
        type: Number,
        required: true,
        unique: false,
    },

});

module.exports = mongoose.model('User', userProfileSchema)