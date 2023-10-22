const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({

    userId: {
        type: ObjectId,
        require: true,
        unique: true
    },

    points: {
        type: Number,
        required: true,
        unique: false,
    },

    pointsTotal: {
        type: Number,
        required: true,
        unique: false
    },

    badges: {
        type: Number,
        required: true,
        unique: false,
    },

    badgesTotal: {
        type: Number,
        required: true,
        unique: false,
    },


});

userProfileSchema.statics.initialize = async function (userId) {

    let userProfile = undefined;

    try {
        userProfile = await this.create({ userId: userId, points: 0, pointsTotal: 0, badges: 0, badgesTotal: 0 });
    } catch (e) {
        console.log(e);
        throw Error("Creating user profile failed!")
    }

    return userProfile;

}

module.exports = mongoose.model('UserProfile', userProfileSchema)