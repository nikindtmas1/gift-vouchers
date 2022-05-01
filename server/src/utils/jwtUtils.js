const jwt = require('jsonwebtoken');
const { development } = require('../config/config');
const secretStr = development.secret;

function createAccessToken(user) {

    let payload = {
        _id: user._id,
        username: user.username
    };

    let options = {
        expiresIn: '2d'
    };

    let accessToken = jwt.sign(payload, secretStr, options);

    return accessToken;
    
};

async function createRefreshToken(user) {

    let payload = {
        _id: user._id
    };

    let secretStrTwo = 'mnogoqkaparola2';

    let options = {
        expiresIn: '2d'
    };

   let refreshToken = await jwt.sign(payload, secretStrTwo, options);

   return refreshToken;
}

module.exports = {
    createAccessToken,
    createRefreshToken
};