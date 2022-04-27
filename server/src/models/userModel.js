const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('User', userModel);