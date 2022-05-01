const jwt = require('jsonwebtoken');
const { development } = require('../config/config');
const secret = development.secret;

// module.exports = (req, res, next) => {
//     const token = req.header('x-auth-token');
  
//     if(!token) return res.status(401).send({
//         ok: true,
//         error: 'Access denied. No token provided'
//     })

//     console.log(token);

//     try {
//         const decoded = jwt.verify(token, 'MOGYSHTSECRET')
        
//     } catch (error) {
//         return res.status(401).send({
//             ok: false,
//             error: "Token expired"
//         });
//     }

//     next();
// }

function auth(req, res, next) {
    
};

function isAuth(req, res, next){
    if(!req.user){
        return res.status(401)
    };

    next();
};

function isGuest(req, res, next) {
    if(!req.user){
        next();
    };
};

module.exports = {
    auth,
    isAuth,
    isGuest
}