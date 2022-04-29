const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
  
    if(!token) return res.status(401).send({
        ok: true,
        error: 'Access denied. No token provided'
    })

    console.log(token);

    try {
        const decoded = jwt.verify(token, 'MOGYSHTSECRET')
        
    } catch (error) {
        return res.status(401).send({
            ok: false,
            error: "Token expired"
        });
    }

    next();
}