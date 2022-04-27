const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.login = async ({username, password}) => {

    let user = await User.findOne({username, password});

    if(user){

        console.log(user);
    }
}