const express = require('express');
const router = express.Router();

const services = require('../services/userServices');

router.post('/login', async (req, res) => {
    let {username, password} = req.body;

    let {user} = await services.login({username, password});

    res.json({user});
});

module.exports = router;