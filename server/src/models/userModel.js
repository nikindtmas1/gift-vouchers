const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    },
    roles: {
        type: String,
        required: [true, 'Roles is required']
    }
});

userModel.static('findByUsername', function(username){
    return this.findOne({username});
});

module.exports = mongoose.model('User', userModel);